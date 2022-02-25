import { SendPayload } from '.';

describe('[SendPaylaod]', () => {
  const sendPayload = new SendPayload(
    'zc1sgwuqf5wlng5rgpjtqm0v9u78n9x0mn5msuts9',
    'zc1sgwuqf5wlng5rgpjtqm0v9u78m9x0mn5s74608',
    30000,
  );
  it('Should encode send payload', async (done) => {
    expect(sendPayload.Encode().toString('hex')).toEqual(
      'a3015500821dc0268efcd141a0325836f6179e3cca67ee74025500821dc0268efcd141a0325836f6179e3eca67ee7403197530',
    );
    done();
  });

  it('Should decode send transaction payload to Map', async (done) => {
    const sendp = new SendPayload();
    sendp.Decode('a3015500821dc0268efcd141a0325836f6179e3cca67ee74025500821dc0268efcd141a0325836f6179e3eca67ee7403197530');

    //@ts-ignore
    expect(sendp.Map().get(1)).toEqual(sendPayload.Sender);
    //@ts-ignore
    expect(sendp.Map().get(2)).toEqual(sendPayload.Receiver);
    //@ts-ignore
    expect(sendp.Map().get(3)).toEqual(sendPayload.Amount);
    done();
  });
});
