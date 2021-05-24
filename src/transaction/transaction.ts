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
    Decode(data: Buffer): void,
    Map():Map<number,any>
}

