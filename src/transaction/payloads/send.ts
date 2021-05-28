
import { Decoder ,Encoder, Map } from "cbor";
import Address from "../../address/Address";
import { ITransactionPayload } from "../Transaction";

export default class SendPayload implements ITransactionPayload {

    private Sender: Buffer;
    private Receiver: Buffer;
    private Amount: Number;

    /** SendPayload will generate payload needed for send transaction
     * @param  {string} Sender bech32 Address of sender(signer)
     * @param  {string} Receiver bech32 Address of Reciever
     * @param  {number} Amount Amount to Send
     */
    constructor(Sender: string, Receiver: string, Amount: number) {
        this.Sender = Address.DecodeFromBech32(Sender)
        this.Receiver = Address.DecodeFromBech32(Receiver)
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
    public Map():Map<number,any>{
        let sp = new Map()
        sp.set(1,this.Sender)
        sp.set(2, this.Receiver)
        sp.set(3, this.Amount)
        return sp
    }

    /**
     * will create new send payload from map
     * @param  {CborMap} data cbormap of send payload portion
     * @returns SendPayload
     */
    public static Decode(data:Map<number,any>): SendPayload {
        //#TODO update after creating address requirements to convert address to bech32
        return new SendPayload(
            Address.EncodeToBech32(data.get(1)),
            Address.EncodeToBech32(data.get(2)),
            data.get(3)
        )
    }
}