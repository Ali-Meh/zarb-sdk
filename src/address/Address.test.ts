import Address from "./Address"




describe("[Address]", () => {
    it("Should Be Able to Create Address from PublicKey",async(done)=>{
        /*
        *    blak2b:   551fa6b823e12d8ec8df900dbc2116505c4c5fc08d735b3ea5549b507df516e9
        *    ripe160:  b9fd74da717763a33881908fdc8637e561068d67
        *    address:  zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c
        */

        let addr=new Address("zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c")
        expect(addr.GetAddress().toString('hex')).toEqual('b9fd74da717763a33881908fdc8637e561068d67')

        let pub='6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595'
        addr=new Address("zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c",Buffer.from(pub,'hex'))
        expect(addr.GetAddress().toString('hex')).toEqual('b9fd74da717763a33881908fdc8637e561068d67')

        done()
    })
    it("should fail on invalid Address",async(done)=>{
        expect(()=>Address.DecodeFromBech32('srb17mka0cw484es5whq638xkm89msgzczmrpd86dv')).toThrowError(new Error("Prefix Doesn't match"))
        expect(()=>Address.DecodeFromBech32('zrb17mka0cw484es5whq638xkm89msgzczmrwy64dz')).toThrowError(new Error("Invalid checksum"))
        done()
    })

    it("Should generate Address from Public Key",async(done)=>{
        let pub='6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595'

        expect(Address.FromPublicKey(Buffer.from(pub,'hex')).toString('hex')).toEqual('b9fd74da717763a33881908fdc8637e561068d67')

        done()
    })

    it("Should Verify Address by Pubkey",async(done)=>{
        let address=new Address('zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c')
        expect(address.Verify(Buffer.from('6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cec1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595','hex'))).toBeTruthy()
        expect(address.Verify(Buffer.from('6df01b4b4f49b26692d83add4bf9a47c8a3b5db2f5000b80a399a9b1b6afe04f8afd6749354e3f766c877b2837351004a279f4834dd532018766c0446cdc1d1903735d52cafdb5ad2c61764fe89da05d139f7efe5f049d8ec92727ba93c74595','hex'))).toBeFalsy()
        done()
    })

    it("Should Encode to Bech32",async(done)=>{
        let address=Buffer.from('b9fd74da717763a33881908fdc8637e561068d67','hex')
        let encoded=Address.EncodeToBech32(address)
        
        expect(encoded).toEqual('zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c')
        
        done()
    })

    
    it("Should Decode from Bech32",async(done)=>{
        let decoded=Address.DecodeFromBech32('zrb1h87hfkn3wa36xwypjz8aep3hu4ssdrt86chs3c')
        
        expect(decoded.toString('hex')).toEqual('b9fd74da717763a33881908fdc8637e561068d67')
        
        done()
    })
})