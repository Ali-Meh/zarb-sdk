import Logger from "./logger"
const bls = require('bls-wasm')


export async function GenerateSecretKey():Promise<string>{
    await bls.init(bls.BLS12_381)
    const sec = new bls.SecretKey()
    sec.setByCSPRNG()


    return sec.serializeToHexStr()

}