import { Map } from 'cbor';
import Key from '../key/Key';
import SendPayload from './payloads/send';
import Transaction, { payloadType } from './Transaction';

describe('[transaction]', () => {
  const tx = new Transaction(
    1,
    Buffer.from('59320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d91506', 'hex'),
    1,
    1000,
    payloadType.PayloadTypeSend,
    new SendPayload('zc1sgwuqf5wlng5rgpjtqm0v9u78m9x0mn5s74608', 'zc1sgwuqf5wlng5rgpjtqm0v9u78n9x0mn5msuts9', 30000),
    'sladjfllksd',
  );

  it('Should encode transaction object', async (done) => {
    const buf = tx.Encode();

    expect(buf.toString('hex')).toEqual(
      'a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a3015500821dc0268efcd141a0325836f6179e3eca67ee74025500821dc0268efcd141a0325836f6179e3cca67ee7403197530076b736c61646a666c6c6b7364',
    );
    done();
  });

  it('Should decode transaction object', async (done) => {
    const buf =
      'a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a3015500821dc0268efcd141a0325836f6179e3eca67ee74025500821dc0268efcd141a0325836f6179e3cca67ee7403197530076b736c61646a666c6c6b7364';
    const trx = Transaction.Decode(buf);

    expect(trx.Version).toEqual(tx.Version);
    expect(trx.Stamp).toEqual(tx.Stamp);
    expect(trx.Sequence).toEqual(tx.Sequence);
    expect(trx.Fee).toEqual(tx.Fee);
    expect(trx.Memo).toEqual(tx.Memo);
    expect(trx.Payload).toEqual(tx.Payload);
    expect(trx.Type).toEqual(tx.Type);

    done();
  });

  it('Should Decode & Sign Transaction by Key', async (done) => {
    const trx = Transaction.Decode(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a3015500b9fd74da717763a33881908fdc8637e561068d6702550098c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595155830ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );
    const key = await Key.New('e52b618c2435aab6b6efdf57c1564e69cfade5ddf584d010e2a5939f6c51a604');

    expect(trx.Signature?.toString('hex')).toEqual(
      'ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );
    expect(trx.PublicKey?.toString('hex')).toEqual(
      '6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595',
    );
    expect(trx.Encode(true).toString('hex')).toEqual(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a3015500b9fd74da717763a33881908fdc8637e561068d6702550098c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595155830ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );

    trx.Sign(key);
    expect(trx.PublicKey).toBeTruthy();
    expect(trx.Signature).toBeTruthy();
    expect(trx.Signature?.toString('hex')).toEqual(
      '71edab5ec67812451b5879b0c8fa7b2df771adb6a23270d0b8d2f328fd1a783cdba43ca696ab7f7fe0fe601d04cbad8b',
    );
    expect(trx.PublicKey?.toString('hex')).toEqual(
      '6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595',
    );
    expect(trx.Encode(true).toString('hex')).toEqual(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a3015500b9fd74da717763a33881908fdc8637e561068d6702550098c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c7459515583071edab5ec67812451b5879b0c8fa7b2df771adb6a23270d0b8d2f328fd1a783cdba43ca696ab7f7fe0fe601d04cbad8b',
    );

    done();
  });
  it('Should Sign Message Properly', async (done) => {
    const secretKey = await Key.New('68dcbf868133d3dbb4d12a0c2907c9b093dfefef6d3855acb6602ede60a5c6d0'),
      publickey = secretKey.GetPublicKey(),
      address = secretKey.GetAddress(),
      sign = secretKey.Sign("zarb");

    expect(secretKey.GetPrivateKey().toString('hex')).toEqual(
      '68dcbf868133d3dbb4d12a0c2907c9b093dfefef6d3855acb6602ede60a5c6d0',
    );
    // expect(publickey.toString('hex')).toEqual(
    //   'af0f74917f5065af94727ae9541b0ddcfb5b828a9e016b02498f477ed37fb44d5d882495afb6fd4f9773e4ea9deee436030c4d61c6e3a1151585e1d838cae1444a438d089ce77e10c492a55f6908125c5be9b236a246e4082d08de564e111e65',
    // );
    // expect(address.toString('hex')).toEqual(
    //   'a2d06b33af2c9e7ca878da85a96b2c2346f4306d0473bdabc38be87c19dae5e67e08724a5220d0e372fb080bbd2fbde9',
    // );
    // expect(sign.toString('hex')).toEqual(
    //   'zc15x2a0lkt5nrrdqe0rkcv6r4pfkmdhrr39g6klh',
    // );

    done();
  });
});
