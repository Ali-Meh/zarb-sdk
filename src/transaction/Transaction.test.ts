import { Map } from 'cbor';
import Key from '../key/Key';
import SendPayload from './payloads/send';
import Transaction, { payloadType } from './Transaction';

describe('[transaction]', () => {
  let tx = new Transaction(
    1,
    Buffer.from('59320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d91506', 'hex'),
    1,
    1000,
    payloadType.PayloadTypeSend,
    new SendPayload('zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c', 'zrb1nryfnyvt860gx6kyhd79rdxdfnyk04c0tg8xwt', 30000),
    'sladjfllksd',
    // PublicKey:"6DF01B4B4F49B26692D83ADD4BF9A47C8A3B5DB2F5000B80A399A9B1B6AFE04F8AFD6749354E3F766C877B2837351004A279F4834DD532018766C0446CEC1D1903735D52CAFDB5AD2C61764FE89DA05D139F7EFE5F049D8EC92727BA93C74595",
    // Signature:"D866658B60760CE47233CCE34EA4081348ABE1631CE42A29E75BF71BFED4AE02193B8515261DDFFF39BA07CAFCDBF904",
  );

  // let key=

  it('Should encode transaction object', async (done) => {
    let buf = tx.Encode();

    expect(buf.toString('hex')).toEqual(
      'a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530076b736c61646a666c6c6b7364',
    );
    done();
  });

  it('Should decode transaction object', async (done) => {
    let buf =
      'a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530076b736c61646a666c6c6b7364';
    let trx = Transaction.Decode(buf);

    expect(trx.Version).toEqual(tx.Version);
    expect(trx.Stamp).toEqual(tx.Stamp);
    expect(trx.Sequence).toEqual(tx.Sequence);
    expect(trx.Fee).toEqual(tx.Fee);
    expect(trx.Memo).toEqual(tx.Memo);
    // expect(trx.Payload).toEqual(tx.Payload) #TODO implement Addresses
    expect(trx.Type).toEqual(tx.Type);

    done();
  });

  it('Should Decode & Sign Transaction by Key', async (done) => {
    let trx = Transaction.Decode(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595155830ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );
    let key = await Key.New('e52b618c2435aab6b6efdf57c1564e69cfade5ddf584d010e2a5939f6c51a604');

    expect(trx.Signature?.toString('hex')).toEqual(
      'ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );
    expect(trx.PublicKey?.toString('hex')).toEqual(
      '6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595',
    );
    expect(trx.Encode(true).toString('hex')).toEqual(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595155830ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );

    trx.Sign(key);
    expect(trx.PublicKey).toBeTruthy();
    expect(trx.Signature).toBeTruthy();
    expect(trx.Signature?.toString('hex')).toEqual(
      'ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );
    expect(trx.PublicKey?.toString('hex')).toEqual(
      '6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595',
    );
    expect(trx.Encode(true).toString('hex')).toEqual(
      'a9010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f031975300764746573741458606df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595155830ea365ae1c2f3f53d1ab0457ff8d59a37d828a6da65929a6a1fb2f24e8be25808a4fee79dcd7439ff50f70886d52d0583',
    );

    done();
  });
});
