import Key from './Key';

describe('[keys]', () => {
  it('Should generate secret key', async (done) => {
    let secret = await Key.New();

    expect(secret.GetPublicKey().toString('hex').length).toBe(192);
    expect(secret.GetPrivateKey().toString('hex').length).toBe(64);

    done();
  });
  it('Should restore from secret key', async (done) => {
    let secret = await Key.New('2f0889619d1a36b831afd5c9cf15951905560a555d0820b652c3570e3b8c2e44');

    expect(secret.GetPublicKey().toString('hex')).toEqual(
      '28cfa0e3e83d388516cbe7def114f16336111b72a948f12d96462687c79954a6d3084a8d7a3f0518f23bf260f2183309ad74448512b72d5ef0e20453f6d6baae3cb6777f3c60453c5653a45f7a1d0c87584325590b2f729254891ab8ea670691',
    );
    expect(secret.GetPrivateKey().toString('hex')).toEqual(
      '2f0889619d1a36b831afd5c9cf15951905560a555d0820b652c3570e3b8c2e44',
    );

    done();
  });
});
