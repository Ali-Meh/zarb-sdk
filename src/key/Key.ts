import Logger from "../logger/logger"
const bls = require('bls-wasm')


export default class Key{
    private privateKey:any
    private publicKey:Buffer
    private logger:Logger

    /**
     * @deprecated use `New()` instead
     */
    constructor() {
        this.logger=Logger.GetLogger()
    }

    
    /**main constructor to setup encryption seeds
     * you need to run this to get a functional key Obj
     * @constructor
     * @param  {string} secret? in hex format to restore from
     * @returns Promise<Key>
     */
    public static async New(secret?:string):Promise<Key>{
        await bls.init(bls.BLS12_381)
        let key=new Key()
        try {
            if (secret){
                key.privateKey = bls.deserializeHexStrToSecretKey(secret)
                key.logger.trace("Key",`Key has been restored :${key.privateKey}`)
            }else{
                key.privateKey = new bls.SecretKey()
                key.privateKey.setByCSPRNG()
                key.logger.trace("Key",`New Key Generated :${key.privateKey}`)
            }
    
            key.publicKey=Buffer.from(key.privateKey.getPublicKey().serializeToHexStr(),'hex')
            key.logger.trace("Key",`Public Key Set`)
    
        } catch (error) {
            key.logger.Error("[Key.New]: ",error)
        }
        return key
    }

    GetPrivateKey():Buffer{
        return Buffer.from(this.privateKey.serializeToHexStr(),'hex')
    }

    GetPublicKey():Buffer{
        return this.publicKey
    }


    Sign(s:string|Uint8Array):any{
        return this.privateKey.sign(s)
    }
}



// export async function GenerateSecretKey():Promise<string>{
//     const sec = new bls.SecretKey()
//     sec.setByCSPRNG()


//     return sec.serializeToHexStr()

// }