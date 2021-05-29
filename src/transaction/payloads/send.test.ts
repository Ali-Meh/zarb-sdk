import { SendPayload } from '.';

describe('[SendPaylaod]', () => {
  let sendPayload = new SendPayload(
    'zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c',
    'zrb1nryfnyvt860gx6kyhd79rdxdfnyk04c0tg8xwt',
    30000,
  );
  it('Should encode send payload', async (done) => {
    expect(sendPayload.Encode().toString('hex')).toEqual(
      'a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530',
    );
    done();
  });

  it('Should decode send transaction payload to Map', async (done) => {
    let sendp = new SendPayload();
    sendp.Decode('a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530');

    //@ts-ignore
    expect(sendp.Map().get(1)).toEqual(sendPayload.Sender);
    //@ts-ignore
    expect(sendp.Map().get(2)).toEqual(sendPayload.Receiver);
    //@ts-ignore
    expect(sendp.Map().get(3)).toEqual(sendPayload.Amount);
    done();
  });
});
