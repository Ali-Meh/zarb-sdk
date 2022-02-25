import Key from './Key';
import * as noblebls from '@noble/bls12-381';
//@ts-ignore
import blswasm from 'bls-wasm';
// var loadBlsSign = require("bls-signatures");
import loadBlsSign from '@chiamine/bls-signatures'


describe('[keys]', () => {
  it('Should generate secret key', async (done) => {
    const secret = await Key.New();

    expect(secret.GetPublicKey().toString('hex').length).toBe(192);
    expect(secret.GetPrivateKey().toString('hex').length).toBe(64);

    done();
  });
  it('Should restore from secret key', async (done) => {
    const secret = await Key.New('2f0889619d1a36b831afd5c9cf15951905560a555d0820b652c3570e3b8c2e44');

    expect(secret.GetPublicKey().toString('hex')).toEqual(
      '28cfa0e3e83d388516cbe7def114f16336111b72a948f12d96462687c79954a6d3084a8d7a3f0518f23bf260f2183309ad74448512b72d5ef0e20453f6d6baae3cb6777f3c60453c5653a45f7a1d0c87584325590b2f729254891ab8ea670691',
    );
    expect(secret.GetPrivateKey().toString('hex')).toEqual(
      '2f0889619d1a36b831afd5c9cf15951905560a555d0820b652c3570e3b8c2e44',
    );

    done();
  });



  const privateKey = '11844597f22cbc452c1560b6c1b9a1e41e77e301c6981eb5026ec289e4e5f123';
  const publicKey = 'a7aa45e7e3f6496312b05aab2d4c77b3c3b5e7cdd1fa355bb09f5fd871347b9e7301d8adb3fbec54f7bf2316bd50d66403b917ca7a06548f1de07585b08e5564271fd2debf778d4060b63c6ad06903903c66df8152c9b2c61b1afae23ce01583';
  it('bls-wasm', async (done) => {
    await blswasm.init(blswasm.BLS12_381);
    // bls.setETHmode(bls.ETH_MODE_DRAFT_06)
    let prv = blswasm.deserializeHexStrToSecretKey(privateKey);
    // prv.setByCSPRNG()

    expect(prv.serializeToHexStr()).toEqual(
      privateKey,
    );
    expect(prv.getPublicKey().serializeToHexStr()).toEqual(
      publicKey,
    );
    done();
  });
  it('bls-signatures', async (done) => {
    var bls = await loadBlsSign();
    // bls.G1Element.from_bytes(Buffer.from('93e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8', 'hex'))
    let sk = bls.PrivateKey.from_bytes(Buffer.from(privateKey, 'hex'), false)
    // let sk = bls.AugSchemeMPL.key_gen(Uint8Array.from())
    let pk = sk.get_g1();
    let ppk = sk.get_g2();
    var skBytes = sk.serialize();
    var pkBytes = pk.serialize();
    var signBytes = ppk.serialize();
    let prv = bls.Util.hex_str(skBytes);
    let pub = bls.Util.hex_str(pkBytes);
    let sig = bls.Util.hex_str(signBytes);
    console.log(prv);
    console.log(pub);
    console.log(sig);

    expect(prv).toEqual(
      privateKey,
    );
    expect(sig).toEqual(
      publicKey,
    );
    done();
  });

  it('@noble/bls12-381', async (done) => {
    // noblebls.pairing(
    //   noblebls.PointG1.fromHex('1 24aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8 13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801 606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be'),
    //   noblebls.PointG2.BASE
    // );
    const publicKey = noblebls.getPublicKey(privateKey);
    console.log('key:', publicKey.toString());


    expect(noblebls.utils.bytesToHex(publicKey)).toEqual(
      publicKey,
    );
    done();
  });
});
