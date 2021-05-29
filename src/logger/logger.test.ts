import logger,{Logger} from "./logger";

describe('[Logger]',()=>{
  it('it should be only Logger all time', async(done) => {
    let logger1=logger;
    let logger2=new Logger();
    let logger3=Logger.GetLogger();
    
    expect(logger1).toEqual(logger2);
    expect(logger3).toEqual(logger2);
    done();
  })
})