import {Map, Encoder, Decoder } from "cbor"
import SendPayload from "./payloads/send";

export default class transaction{
    Version:number;
    Stamp:Buffer;
    Sequence:number;
    Fee:number;
    Type:payloadType;
    Payload:ITransactionPayload;
    Memo:string;
    PublicKey:string;
    Signature:string;

    /**
     * it will generate new transaction payload based on payload provided
     * @param  {number} Version Transactions version
     * @param  {Buffer} Stamp   last block hash
     * @param  {number} Sequence   accounts transaction sequence
     * @param  {number} Fee fee willing to pay for this transaction to go through
     * @param  {payloadType} Type   type of the transaction
     * @param  {ITransactionPayload} Payload    specific payload of transaction based on type of transaction
     * @param  {string} Memo    memo for the transaction
     */
    constructor(Version:number,
        Stamp:Buffer,
        Sequence:number,
        Fee:number,
        Type:payloadType,
        Payload:ITransactionPayload,
        Memo:string) {
            this.Version=Version;
            this.Stamp=Stamp;
            this.Sequence=Sequence;
            this.Fee=Fee;
            this.Type=Type;
            this.Payload=Payload;
            this.Memo=Memo;
    }
    
    /**
     * @param  {bool} sign=false should it include sign info
     * @returns Buffer  will return encoded payload
     */
    Encode(sign=false):Buffer{
        let mtx=new Map()
        mtx.set(1,this.Version)
        mtx.set(2,this.Stamp)
        mtx.set(3,this.Sequence)
        mtx.set(4,this.Fee)
        mtx.set(5,this.Type)
        mtx.set(6,this.Payload.Map())
        mtx.set(7,this.Memo)
        if (sign){
            mtx.set(20,this.PublicKey)
            mtx.set(21,this.Signature)
        }
        return Encoder.encode(mtx)
    }
    
    /**
     * @param  {string} data    transaction cbor encoded payload to decode
     * @returns transaction will generate new transaction and append stuff to it and retur it
     */
    static Decode(data:string):transaction{
        let decodedTrx=Decoder.decodeFirstSync(data);

        let payload:ITransactionPayload
        switch (decodedTrx.get(5)) {
            case payloadType.PayloadTypeSend:
                payload=SendPayload.Decode(decodedTrx.get(6))
                break;

            default:
                break;
        }


        
        return new transaction(
            decodedTrx.get(1),
            decodedTrx.get(2),
            decodedTrx.get(3),
            decodedTrx.get(4),
            decodedTrx.get(5),
            //@ts-ignore
            payload,
            decodedTrx.get(7),
        )
    }
}

export enum payloadType{
    PayloadTypeSend=1,
    PayloadTypeBond,
    PayloadTypeSortition,
    PayloadTypeUnbond
}


export interface ITransactionPayload{
    Decode(data: string): void,
    Map():Map<number,any>
}

