import { GenerateSecretKey } from "./Keys"




describe("[keys]", () => {
    it("Should generate secret key",async(done)=>{
        let secret=await GenerateSecretKey()
        done()
    })
})