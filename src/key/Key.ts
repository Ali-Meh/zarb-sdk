import Address from '../address/Address';
import { tracers } from '../constants';
import Logger from '../logger/logger';
import { ModuleInstance, PrivateKey } from '@chiamine/bls-signatures';
import loadBlsSign from '@chiamine/bls-signatures';
//@ts-ignore
import blswasm from 'bls-wasm';
const blake2 = require('blake2');
const h = blake2.createHash('blake2b', { digestLength: 32 });

export default class Key {
  private privateKey: PrivateKey;
  private publicKey: Buffer;
  private bls: ModuleInstance;

  /**
   *use `New()` instead
   */
  private constructor() { }

  /**main constructor to setup encryption seeds
   * you need to run this to get a functional key Obj
   * @constructor
   * @param  {string} secret? in hex string secret key to restore Key from
   * @returns Promise<Key>
   */
  public static async New(secret?: string): Promise<Key> {
    await blswasm.init(blswasm.BLS12_381);
    const key = new Key();
    key.bls = await loadBlsSign();
    try {
      if (secret) {
        key.privateKey = key.bls.PrivateKey.from_bytes(Buffer.from(secret, 'hex'), true)
        Logger.trace(tracers.KEY, `Key has been restored :${key.privateKey}`);
      } else {
        key.privateKey = key.bls.PrivateKey.from_bytes(new blswasm.SecretKey(), true);
        // key.privateKey.setByCSPRNG();
        Logger.trace(tracers.KEY, `New Key Generated :${key.privateKey}`);
      }

      key.publicKey = Buffer.from(key.privateKey.get_g2().serialize());
      Logger.trace(tracers.KEY, `Public Key Set`);
    } catch (error) {
      Logger.Error('[Key.New]: ', error);
      throw error;
    }
    return key;
  }

  /**
   * return PrivateKey
   * @returns Buffer
   */
  GetPrivateKey(): Buffer {
    return Buffer.from(this.privateKey.serialize());
  }

  /**
   * return Publickey
   * @returns Buffer
   */
  GetPublicKey(): Buffer {
    return this.publicKey;
  }
  /**
   * will get Address of current Key Object
   * @returns Buffer
   */
  GetAddress(): Buffer {
    return Address.FromPublicKey(this.publicKey);
  }

  /**
   * sign messages
   * @param  {string|Uint8Array} m message body to sign
   * @returns Buffer of messages signutre
   */
  Sign(m: string | Uint8Array): Buffer {
    if (typeof m == 'string') {
      h.update(Buffer.from(m))
    } else {
      h.update(m);
    }

    return Buffer.from(this.bls.BasicSchemeMPL.sign(this.privateKey, h.digest()).serialize());
  }
}

// export async function GenerateSecretKey():Promise<string>{
//     const sec = new bls.SecretKey()
//     sec.setByCSPRNG()

//     return sec.serializeToHexStr()

// }
