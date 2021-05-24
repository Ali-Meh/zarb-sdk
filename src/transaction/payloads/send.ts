
import { Decoder, Encoder, Map } from "cbor"
import CborMap from "cbor/types/lib/map";
import { ITransactionPayload } from "../transaction";

//#TODO replace with dedicated address class
const bech32 = require('bech32-buffer');

export default class SendPayload implements ITransactionPayload {

    private Sender: string;
    private Receiver: string;
    private Amount: Number;

    /** SendPayload will generate payload needed for send transaction
     * @param  {string} Sender bech32 Address of sender(signer)
     * @param  {string} Receiver bech32 Address of Reciever
     * @param  {number} Amount Amount to Send
     */
    constructor(Sender: string, Receiver: string, Amount: number) {
        this.Sender = Sender
        this.Receiver = Receiver
        this.Amount = Amount
    }

    /** will update transaction payload object based on decoded data
     * @param  {string} data hex encoded payload portion of transaction payload
     * @returns void
     */
    Decode(data: string): void {
        let decoded = Decoder.decodeFirstSync(data)
        this.Sender=decoded.get(1)
        this.Receiver=decoded.get(2)
        this.Amount=decoded.get(3)
    }
    /**
     * will encode send portion payload
     * @returns Buffer of encoded payload
     */
    public Encode(): Buffer {
        return Encoder.encode(this.Map())
    }

    /**
     * will map according to the send payload object
     * @returns Map of send portion payload
     */
    public Map():CborMap{
        let sp = new Map()
        sp.set(1, Buffer.from(bech32.decode(this.Sender).data))
        sp.set(2, Buffer.from(bech32.decode(this.Receiver).data))
        sp.set(3, this.Amount)
        return sp
    }

    /**
     * will create new send payload from map
     * @param  {CborMap} data cbormap of send payload portion
     * @returns SendPayload
     */
    public static Decode(data:CborMap): SendPayload {
        //#TODO update after creating address requirements to convert address to bech32
        return new SendPayload(
            data.get(1).toString('hex'),
            data.get(2).toString('hex'),
            data.get(3)
        )
    }
}