import logger from '../logger/logger';
import * as bech32 from 'bech32-buffer';
import * as blake2 from 'blake2';
import RIPEMD160 from 'ripemd160';


export const AddressTypeBLS = Buffer.from(new Uint8Array(1));


export default class Address {
  private address: Buffer;
  private publicKey?: Buffer;

  /**
   * Will generate
   */
  constructor(address: string, publicKey?: Buffer) {
    this.address = Address.DecodeFromBech32(address);
    if (publicKey) {
      const addr = Address.FromPublicKey(publicKey);
      logger.Debug(`[Address.CTOR.pubkey]: ${addr}`);
      if (addr.toString() !== this.address.toString()) {
        logger.Error(`[Address.CTOR]: ${addr.toString('hex')} != ${this.address.toString('hex')}`);
        throw new Error("public key and address don't match");
      }
      this.publicKey = publicKey;
    }
  }
  /**
   * Get Address
   * @returns Buffer
   */
  public GetAddress(): Buffer {
    return this.address.slice(1);
  }

  /**
   * verify publickey is corespondig to the address
   * @param  {Buffer} pub public key
   * @returns boolean
   */
  public Verify(pub: Buffer): boolean {
    try {
      let addr = Address.FromPublicKey(pub);
      return addr.toString() === this.address.toString();
    } catch (error) {
      logger.Error('[Address.Verify]: ', error);
    }
    return false;
  }

  /***** */

  static FromPublicKey(pub: Buffer): Buffer {
    let address: string;
    try {
      const h = blake2.createHash('blake2b', { digestLength: 32 });
      h.update(pub);
      const has = h.digest('hex');
      logger.Debug('Address', `blake2b => ${has}`);

      const rip = new RIPEMD160();
      address = rip.update(has, 'hex').digest('hex');

      logger.Debug('Address', `ripemd160 => ${address}`);
    } catch (error) {
      logger.Error('[Address.FromPublicKey]', error);
      throw error;
    }

    return Buffer.concat([AddressTypeBLS, Buffer.from(address, 'hex')]);
  }

  static EncodeToBech32(address: Buffer): string {
    const encoded = bech32.encode('zc', address.slice(1));
    logger.Debug('Address', `Encoded bech32 Address => ${encoded}`);
    return encoded;
  }

  static DecodeFromBech32(address: string): Buffer {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix !== 'zc') {
        throw new Error("Prefix Doesn't match");
      }
      logger.Debug('Address', `Decoded bech32 Address => ${decoded}`);
      return Buffer.concat([AddressTypeBLS, Buffer.from(decoded.data)]);
    } catch (error) {
      logger.Error('[Address.DecodeFromBech32]: ', error);
      throw error;
    }
  }
}



