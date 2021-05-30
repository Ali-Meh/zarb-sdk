//@ts-ignore
import {Key,Logger,Transaction,ZarbRPC, BlockchainInfoRequest, AccountRequest, SendPayload, Address ,payloadType, SendRawTransactionRequest,AccountResponse, BlockchainInfoResponse,SendRawTransactionResponse} from '../index.ts'
import dotenv from 'dotenv'
import { credentials,ServiceError } from '@grpc/grpc-js';
dotenv.config()


async function main() {
    const senderkey=await Key.New();
    const reciverkey=await Key.New();

    const zarbRPC=new ZarbRPC("172.104.186.100:9090",credentials.createInsecure())

    Logger.Info("Connecting to grpc")
    try {
        Logger.Info("grpcClient connected")
        
        zarbRPC.getBlockchainInfo(new BlockchainInfoRequest(),(err:ServiceError | null,info:BlockchainInfoResponse)=>{
            if (err){
                Logger.Error("[Exmaple.getBlockchainInfo]: ",err)
                return;
            }
            Logger.Debug(`[Exmaple.getBlockchainInfo]: Got blockchaine Info \n${JSON.stringify(info.toObject())}`)
            Logger.Debug(`[Exmaple.AccountRequest]: requesting info for address ${Address.EncodeToBech32(senderkey.GetAddress())}`)

            zarbRPC.getAccount(new AccountRequest().setAddress(Address.EncodeToBech32(senderkey.GetAddress())),
            (err:ServiceError | null,acc:AccountResponse)=>{
                if (err){
                    Logger.Error("[Exmaple.getAccount]: ",err)
                    return;
                }
                Logger.Debug(`[Exmaple.getBlockchainInfo]: Got Account Info \n${JSON.stringify(acc.toObject())}`)

                //@ts-ignore
                const transaction=new Transaction(1,Buffer.from(info.getLastBlockHash(),'hex'),acc.getAccount().getSequence()+1,1000,payloadType.PayloadTypeSend,new SendPayload(
                    Address.EncodeToBech32(senderkey.GetAddress()),
                    Address.EncodeToBech32(reciverkey.GetAddress()),
                    10000000
                ),"Testing SDK")

                transaction.Sign(senderkey)

                const signedTrx=transaction.Encode(true)
                zarbRPC.sendRawTransaction(new SendRawTransactionRequest().setData(signedTrx.toString('hex')),((err:ServiceError | null,res:SendRawTransactionResponse)=>{
                    if (err){
                        Logger.Error("[Exmaple.sendRawTransaction]: ",err)
                        return;
                    }

                    Logger.Info(res)
                }))
            })
        })
    } catch (error) {
        Logger.Error(error)
    }
}


main().then(e=>{
    Logger.Info("done");
})

setTimeout(()=>{
    Logger.Warn("timer passed out")
},15000)