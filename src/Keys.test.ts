import { GenerateSecretKey } from "./Keys"




describe("[keys]", () => {
    // beforeAll(async () => {

    // })
    it("Should generate secret key",async(done)=>{
        let secret=await GenerateSecretKey()
        console.log(secret);
        done()
    })
})