import Logger from "../logger/logger"
const bech32 = require('bech32-buffer');
const RIPEMD160 = require('ripemd160');
var blake2 = require('blake2');

export default class Address{
    private address:Buffer
    private publicKey?:Buffer

    /**
     * Will generate 
     */
    constructor(publicKey?:Buffer) {
        this.publicKey=publicKey;
        if (this.publicKey) {
            this.address=Address.FromPublicKey(this.publicKey);
        }
        Logger.trace("Address","New address generated");
    }

    public GetAddress():Buffer{
        return this.address;
    }


    static FromPublicKey(pub:Buffer):Buffer{
        let address:string
        try {
            var h = blake2.createHash('blake2b',{digestLength:32})
            h.update(pub);
            let has=h.digest("hex");
            Logger.Debug('Address',`blake2b => ${has}`)
        
        
            let rip=new RIPEMD160()
            address=rip.update(has,'hex').digest('hex')
            Logger.Debug('Address',`ripemd160 => ${address}`)
    
        
    
            // address=bech32.encode("zrb",Buffer.from(addr, 'hex'))
            // Logger.Debug('Address',`Address => ${address}`)
        } catch (error) {
            Logger.Error('[Address.FromPublicKey]',error)
            throw error;
        }

        return Buffer.from(address)
    }


    static EncodeToBech32(address:Buffer):string{
        let encoded=bech32.encode("zrb",address)
        Logger.Debug('Address',`Encoded bech32 Address => ${encoded}`)
        return encoded
    }

    
    static DecodeFromBech32(address:string):Buffer{
        let decoded=Buffer.from(bech32.decode(address).data)
        Logger.Debug('Address',`Decoded bech32 Address => ${decoded}`)
        return decoded
    }

}