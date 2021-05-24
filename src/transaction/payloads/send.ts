
import { Decoder, Encoder, Map } from "cbor"
import CborMap from "cbor/types/lib/map";
import { ITransactionPayload } from "../transaction";

//#TODO replace with dedicated address class
const bech32 = require('bech32-buffer');

export default class SendPayload implements ITransactionPayload {

    private Sender: string;
    private Receiver: string;
    private Amount: Number;


    constructor(Sender: string, Receiver: string, Amount: number) {
        this.Sender = Sender
        this.Receiver = Receiver
        this.Amount = Amount
    }
    Decode(data: Buffer): void {
        let decoded = Decoder.decodeAllSync(data)
        this.Sender=decoded[0]
        this.Receiver=decoded[1]
        this.Amount=decoded[2]
    }

    public Encode(): Buffer {
        return Encoder.encode(this.Map)
    }


    public Map():CborMap{
        let sp = new Map()
        sp.set(1, Buffer.from(bech32.decode(this.Sender).data))
        sp.set(2, Buffer.from(bech32.decode(this.Receiver).data))
        sp.set(3, this.Amount)
        return sp
    }


    public static Decode(data:any): SendPayload {
        //#TODO update after creating address requirements to convert address to bech32
        return new SendPayload(
            data.get(1).toString('hex'),
            data.get(2).toString('hex'),
            data.get(3)
        )
    }
}