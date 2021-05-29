//@ts-ignore
import {Key,Logger,Transaction,gRPC, BlockchainInfoRequest, AccountRequest, SendPayload, Address ,payloadType, SendRawTransactionRequest} from '../src'
import dotenv from 'dotenv'
import { credentials } from '@grpc/grpc-js';
dotenv.config()


async function main() {
    let senderkey=await Key.New();
    let reciverkey=await Key.New();

    let zarbRPC=new gRPC("172.104.186.100:9090",credentials.createInsecure())

    Logger.Info("Connecting to grpc")
    try {
        Logger.Info("grpcClient connected")
        
        zarbRPC.getBlockchainInfo(new BlockchainInfoRequest(),(err,info)=>{
            if (err){
                Logger.Error("[Exmaple.getBlockchainInfo]: ",err)
                return;
            }
            Logger.Debug(`[Exmaple.getBlockchainInfo]: Got blockchaine Info ${info.toObject()}`)
            Logger.Debug(`[Exmaple.AccountRequest]: requesting info for address ${Address.EncodeToBech32(senderkey.GetAddress())}`)

            zarbRPC.getAccount(new AccountRequest().setAddress(Address.EncodeToBech32(senderkey.GetAddress())),
            (err,acc)=>{
                if (err){
                    Logger.Error("[Exmaple.getAccount]: ",err)
                    return;
                }
                Logger.Debug(`[Exmaple.getBlockchainInfo]: Got Account Info ${acc.toObject()}`)

                //@ts-ignore
                let transaction=new Transaction(1,Buffer.from(info.getLastBlockHash(),'hex'),acc.getAccount().getSequence()+1,1000,payloadType.PayloadTypeSend,new SendPayload(
                    Address.EncodeToBech32(senderkey.GetAddress()),
                    Address.EncodeToBech32(reciverkey.GetAddress()),
                    10000000
                ),"Testing SDK")

                transaction.Sign(senderkey)

                let signedTrx=transaction.Encode(true)
                zarbRPC.sendRawTransaction(new SendRawTransactionRequest().setData(signedTrx.toString('hex')),((err,res)=>{
                    if (err){
                        console.log("[Exmaple.sendRawTransaction]: ",err)
                        return;
                    }

                    Logger.Info(res)
                }))
            })
        })
    } catch (error) {
        Logger.Info(typeof gRPC)
        Logger.Error(error)
    }
}


main().then(e=>{
    console.log("done");
    
})

// setTimeout(()=>{
//     console.log("timer passed out")
// },15000)