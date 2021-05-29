import { LogVer, tracers } from '../constants';

let _logger: Partial<Console> = console;
let _logVerbosity: LogVer = LogVer.ERROR;

let logger:Logger





export class Logger implements ILogger{
  static verbosityString='INFO'
  static tracersString=''
  static enabledTracers:string[]
  static allEnabled:boolean


  /**
   * will create or return already created logger object
   */
  constructor() {
    if (logger) {
      return logger
    }

    Logger.verbosityString = process.env.LOG_VERBOSITY ?? 'INFO'

    Logger.tracersString = process.env.GRPC_NODE_TRACE ?? process.env.GRPC_TRACE ?? 'all';
    Logger.enabledTracers = Logger.tracersString.split(',');
    Logger.allEnabled = Logger.enabledTracers.includes('all');

    switch (Logger.verbosityString.toUpperCase()) {
      case 'TRACE':
        _logVerbosity = LogVer.DEBUG;
        break;
      case 'DEBUG':
        _logVerbosity = LogVer.DEBUG;
        break;
      case 'INFO':
        _logVerbosity = LogVer.INFO;
        break;
      case 'WARN':
        _logVerbosity = LogVer.WARN;
        break;
      case 'ERROR':
        _logVerbosity = LogVer.ERROR;
        break;
      default:
      // Ignore any other values
    }
  }

  static GetLogger(): Logger {
    return new Logger();
  };
  
  // static getLogger(): Partial<Console> {
  //   return _logger;
  // };
  
  // static setLogger(logger: Partial<Console>): void {
  //   _logger = logger;
  // };
  
  setLoggerVerbosity (verbosity: LogVer): void {
    _logVerbosity = verbosity;
  };




  public Info(...args: any[]):void{
    this.log(LogVer.INFO,...args)
  }
  public Debug(...args: any[]):void{
    this.log(LogVer.DEBUG,...args)
  }
  public Warn(...args: any[]):void{
    this.log(LogVer.WARN,...args)
  }
  public Error(...args: any[]):void{
    this.log(LogVer.ERROR,...args)
  }


  public log(severity: LogVer, ...args: any[]): void{
    //@ts-ignore
    if (severity >= _logVerbosity && typeof _logger[LogVer[severity].toLowerCase()] === 'function') {
      //@ts-ignore
      _logger[LogVer[severity].toLowerCase()](`${LogVer[severity]}:\t`,...args);
    }
  };
 
  public trace(tracer: tracers, ...args: any[]): void{
    if (Logger.allEnabled || Logger.enabledTracers.includes(tracer)) {
      this.log(LogVer.TRACE, `[${new Date().toISOString()}]::${tracer} => `, ...args);
    }
  }
}




interface ILogger{
  log(severity: LogVer, ...args: any[]): void
  trace(tracer: string, text: string): void
}

export default new Logger();