import * as grpc from '@grpc/grpc-js';
import {ZarbClient} from "./proto/zarb_grpc_pb"

export default ZarbClient
// export default new ZarbClient("172.104.186.100:9090",grpc.credentials.createInsecure())
export * from './proto/zarb_pb'