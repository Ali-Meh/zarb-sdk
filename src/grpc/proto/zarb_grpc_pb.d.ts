// package: zarb
// file: zarb.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import { handleClientStreamingCall } from '@grpc/grpc-js/build/src/server-call';
import * as zarb_pb from './zarb_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

interface IZarbService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBlock: IZarbService_IGetBlock;
  getBlockHeight: IZarbService_IGetBlockHeight;
  getTransaction: IZarbService_IGetTransaction;
  getAccount: IZarbService_IGetAccount;
  getValidators: IZarbService_IGetValidators;
  getValidator: IZarbService_IGetValidator;
  getValidatorByNumber: IZarbService_IGetValidatorByNumber;
  getBlockchainInfo: IZarbService_IGetBlockchainInfo;
  getNetworkInfo: IZarbService_IGetNetworkInfo;
  sendRawTransaction: IZarbService_ISendRawTransaction;
}

interface IZarbService_IGetBlock extends grpc.MethodDefinition<zarb_pb.BlockRequest, zarb_pb.BlockResponse> {
  path: '/zarb.Zarb/GetBlock';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.BlockRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.BlockRequest>;
  responseSerialize: grpc.serialize<zarb_pb.BlockResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.BlockResponse>;
}
interface IZarbService_IGetBlockHeight
  extends grpc.MethodDefinition<zarb_pb.BlockHeightRequest, zarb_pb.BlockHeightResponse> {
  path: '/zarb.Zarb/GetBlockHeight';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.BlockHeightRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.BlockHeightRequest>;
  responseSerialize: grpc.serialize<zarb_pb.BlockHeightResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.BlockHeightResponse>;
}
interface IZarbService_IGetTransaction
  extends grpc.MethodDefinition<zarb_pb.TransactionRequest, zarb_pb.TransactionResponse> {
  path: '/zarb.Zarb/GetTransaction';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.TransactionRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.TransactionRequest>;
  responseSerialize: grpc.serialize<zarb_pb.TransactionResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.TransactionResponse>;
}
interface IZarbService_IGetAccount extends grpc.MethodDefinition<zarb_pb.AccountRequest, zarb_pb.AccountResponse> {
  path: '/zarb.Zarb/GetAccount';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.AccountRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.AccountRequest>;
  responseSerialize: grpc.serialize<zarb_pb.AccountResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.AccountResponse>;
}
interface IZarbService_IGetValidators
  extends grpc.MethodDefinition<zarb_pb.ValidatorsRequest, zarb_pb.ValidatorsResponse> {
  path: '/zarb.Zarb/GetValidators';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.ValidatorsRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.ValidatorsRequest>;
  responseSerialize: grpc.serialize<zarb_pb.ValidatorsResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.ValidatorsResponse>;
}
interface IZarbService_IGetValidator
  extends grpc.MethodDefinition<zarb_pb.ValidatorRequest, zarb_pb.ValidatorResponse> {
  path: '/zarb.Zarb/GetValidator';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.ValidatorRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.ValidatorRequest>;
  responseSerialize: grpc.serialize<zarb_pb.ValidatorResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.ValidatorResponse>;
}
interface IZarbService_IGetValidatorByNumber
  extends grpc.MethodDefinition<zarb_pb.ValidatorByNumberRequest, zarb_pb.ValidatorResponse> {
  path: '/zarb.Zarb/GetValidatorByNumber';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.ValidatorByNumberRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.ValidatorByNumberRequest>;
  responseSerialize: grpc.serialize<zarb_pb.ValidatorResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.ValidatorResponse>;
}
interface IZarbService_IGetBlockchainInfo
  extends grpc.MethodDefinition<zarb_pb.BlockchainInfoRequest, zarb_pb.BlockchainInfoResponse> {
  path: '/zarb.Zarb/GetBlockchainInfo';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.BlockchainInfoRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.BlockchainInfoRequest>;
  responseSerialize: grpc.serialize<zarb_pb.BlockchainInfoResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.BlockchainInfoResponse>;
}
interface IZarbService_IGetNetworkInfo
  extends grpc.MethodDefinition<zarb_pb.NetworkInfoRequest, zarb_pb.NetworkInfoResponse> {
  path: '/zarb.Zarb/GetNetworkInfo';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.NetworkInfoRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.NetworkInfoRequest>;
  responseSerialize: grpc.serialize<zarb_pb.NetworkInfoResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.NetworkInfoResponse>;
}
interface IZarbService_ISendRawTransaction
  extends grpc.MethodDefinition<zarb_pb.SendRawTransactionRequest, zarb_pb.SendRawTransactionResponse> {
  path: '/zarb.Zarb/SendRawTransaction';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<zarb_pb.SendRawTransactionRequest>;
  requestDeserialize: grpc.deserialize<zarb_pb.SendRawTransactionRequest>;
  responseSerialize: grpc.serialize<zarb_pb.SendRawTransactionResponse>;
  responseDeserialize: grpc.deserialize<zarb_pb.SendRawTransactionResponse>;
}

export const ZarbService: IZarbService;

export interface IZarbServer extends grpc.UntypedServiceImplementation {
  getBlock: grpc.handleUnaryCall<zarb_pb.BlockRequest, zarb_pb.BlockResponse>;
  getBlockHeight: grpc.handleUnaryCall<zarb_pb.BlockHeightRequest, zarb_pb.BlockHeightResponse>;
  getTransaction: grpc.handleUnaryCall<zarb_pb.TransactionRequest, zarb_pb.TransactionResponse>;
  getAccount: grpc.handleUnaryCall<zarb_pb.AccountRequest, zarb_pb.AccountResponse>;
  getValidators: grpc.handleUnaryCall<zarb_pb.ValidatorsRequest, zarb_pb.ValidatorsResponse>;
  getValidator: grpc.handleUnaryCall<zarb_pb.ValidatorRequest, zarb_pb.ValidatorResponse>;
  getValidatorByNumber: grpc.handleUnaryCall<zarb_pb.ValidatorByNumberRequest, zarb_pb.ValidatorResponse>;
  getBlockchainInfo: grpc.handleUnaryCall<zarb_pb.BlockchainInfoRequest, zarb_pb.BlockchainInfoResponse>;
  getNetworkInfo: grpc.handleUnaryCall<zarb_pb.NetworkInfoRequest, zarb_pb.NetworkInfoResponse>;
  sendRawTransaction: grpc.handleUnaryCall<zarb_pb.SendRawTransactionRequest, zarb_pb.SendRawTransactionResponse>;
}

export interface IZarbClient {
  getBlock(
    request: zarb_pb.BlockRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlock(
    request: zarb_pb.BlockRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlock(
    request: zarb_pb.BlockRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  getTransaction(
    request: zarb_pb.TransactionRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  getTransaction(
    request: zarb_pb.TransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  getTransaction(
    request: zarb_pb.TransactionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  getAccount(
    request: zarb_pb.AccountRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  getAccount(
    request: zarb_pb.AccountRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  getAccount(
    request: zarb_pb.AccountRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidators(
    request: zarb_pb.ValidatorsRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidators(
    request: zarb_pb.ValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidators(
    request: zarb_pb.ValidatorsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidator(
    request: zarb_pb.ValidatorRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidator(
    request: zarb_pb.ValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidator(
    request: zarb_pb.ValidatorRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
}

export class ZarbClient extends grpc.Client implements IZarbClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getBlock(
    request: zarb_pb.BlockRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlock(
    request: zarb_pb.BlockRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlock(
    request: zarb_pb.BlockRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockHeight(
    request: zarb_pb.BlockHeightRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockHeightResponse) => void,
  ): grpc.ClientUnaryCall;
  public getTransaction(
    request: zarb_pb.TransactionRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  public getTransaction(
    request: zarb_pb.TransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  public getTransaction(
    request: zarb_pb.TransactionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.TransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  public getAccount(
    request: zarb_pb.AccountRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  public getAccount(
    request: zarb_pb.AccountRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  public getAccount(
    request: zarb_pb.AccountRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.AccountResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidators(
    request: zarb_pb.ValidatorsRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidators(
    request: zarb_pb.ValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidators(
    request: zarb_pb.ValidatorsRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorsResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidator(
    request: zarb_pb.ValidatorRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidator(
    request: zarb_pb.ValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidator(
    request: zarb_pb.ValidatorRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getValidatorByNumber(
    request: zarb_pb.ValidatorByNumberRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.ValidatorResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public getBlockchainInfo(
    request: zarb_pb.BlockchainInfoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.BlockchainInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public getNetworkInfo(
    request: zarb_pb.NetworkInfoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.NetworkInfoResponse) => void,
  ): grpc.ClientUnaryCall;
  public sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  public sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
  public sendRawTransaction(
    request: zarb_pb.SendRawTransactionRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: zarb_pb.SendRawTransactionResponse) => void,
  ): grpc.ClientUnaryCall;
}
