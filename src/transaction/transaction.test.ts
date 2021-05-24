import {Map} from "cbor"
import Logger from "../logger"
import SendPayload from "./payloads/send"
import transaction,{ payloadType } from "./transaction"




describe("[transaction]", () => {
    let tx=new transaction(
        1,
        Buffer.from("59320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d91506","hex"),
        1,
        1000,
        payloadType.PayloadTypeSend,
        new SendPayload(
            "zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c",
            "zrb1nryfnyvt860gx6kyhd79rdxdfnyk04c0tg8xwt",
            30000
        ),
        "sladjfllksd",
        // PublicKey:"6DF01B4B4F49B26692D83ADD4BF9A47C8A3B5DB2F5000B80A399A9B1B6AFE04F8AFD6749354E3F766C877B2837351004A279F4834DD532018766C0446CEC1D1903735D52CAFDB5AD2C61764FE89DA05D139F7EFE5F049D8EC92727BA93C74595",
        // Signature:"D866658B60760CE47233CCE34EA4081348ABE1631CE42A29E75BF71BFED4AE02193B8515261DDFFF39BA07CAFCDBF904",
    )

    it("Should encode transaction object",async(done)=>{
        let buf=tx.Encode()

        expect(buf.toString('hex')).toEqual("a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530076b736c61646a666c6c6b7364")
        done()
    })

    
    it("Should decode transaction object",async(done)=>{
        let buf='a7010102582059320eb7c302fd0ea764913a13aa4d6aaa8c895ca487c02562ee7fc964d915060301041903e8050106a30154b9fd74da717763a33881908fdc8637e561068d67025498c899918b3e9e836ac4bb7c51b4cd4cc967d70f03197530076b736c61646a666c6c6b7364'
        let trx=transaction.Decode(buf)

        expect(trx.Version).toEqual(tx.Version)
        expect(trx.Stamp).toEqual(tx.Stamp)
        expect(trx.Sequence).toEqual(tx.Sequence)
        expect(trx.Fee).toEqual(tx.Fee)
        expect(trx.Memo).toEqual(tx.Memo)
        // expect(trx.Payload).toEqual(tx.Payload) #TODO implement Addresses
        expect(trx.Type).toEqual(tx.Type)
        
        done()
    })
})