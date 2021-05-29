// package: zarb
// file: zarb.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class AccountRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AccountRequest;
  getVerbosity(): AccountVerbosity;
  setVerbosity(value: AccountVerbosity): AccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRequest): AccountRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRequest;
  static deserializeBinaryFromReader(message: AccountRequest, reader: jspb.BinaryReader): AccountRequest;
}

export namespace AccountRequest {
  export type AsObject = {
    address: string;
    verbosity: AccountVerbosity;
  };
}

export class AccountResponse extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): Account | undefined;
  setAccount(value?: Account): AccountResponse;
  clearTranactionsList(): void;
  getTranactionsList(): Array<Transaction>;
  setTranactionsList(value: Array<Transaction>): AccountResponse;
  addTranactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountResponse): AccountResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountResponse;
  static deserializeBinaryFromReader(message: AccountResponse, reader: jspb.BinaryReader): AccountResponse;
}

export namespace AccountResponse {
  export type AsObject = {
    account?: Account.AsObject;
    tranactionsList: Array<Transaction.AsObject>;
  };
}

export class ValidatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorsRequest): ValidatorsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorsRequest;
  static deserializeBinaryFromReader(message: ValidatorsRequest, reader: jspb.BinaryReader): ValidatorsRequest;
}

export namespace ValidatorsRequest {
  export type AsObject = {};
}

export class ValidatorRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ValidatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorRequest): ValidatorRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorRequest;
  static deserializeBinaryFromReader(message: ValidatorRequest, reader: jspb.BinaryReader): ValidatorRequest;
}

export namespace ValidatorRequest {
  export type AsObject = {
    address: string;
  };
}

export class ValidatorByNumberRequest extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): ValidatorByNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorByNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorByNumberRequest): ValidatorByNumberRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidatorByNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorByNumberRequest;
  static deserializeBinaryFromReader(
    message: ValidatorByNumberRequest,
    reader: jspb.BinaryReader,
  ): ValidatorByNumberRequest;
}

export namespace ValidatorByNumberRequest {
  export type AsObject = {
    number: number;
  };
}

export class ValidatorsResponse extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): ValidatorsResponse;
  addValidators(value?: Validator, index?: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorsResponse): ValidatorsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorsResponse;
  static deserializeBinaryFromReader(message: ValidatorsResponse, reader: jspb.BinaryReader): ValidatorsResponse;
}

export namespace ValidatorsResponse {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>;
  };
}

export class ValidatorResponse extends jspb.Message {
  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): ValidatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorResponse): ValidatorResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ValidatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorResponse;
  static deserializeBinaryFromReader(message: ValidatorResponse, reader: jspb.BinaryReader): ValidatorResponse;
}

export namespace ValidatorResponse {
  export type AsObject = {
    validator?: Validator.AsObject;
  };
}

export class BlockRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): BlockRequest;
  getVerbosity(): BlockVerbosity;
  setVerbosity(value: BlockVerbosity): BlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
    height: number;
    verbosity: BlockVerbosity;
  };
}

export class BlockResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): BlockResponse;

  hasBlockTime(): boolean;
  clearBlockTime(): void;
  getBlockTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBlockTime(value?: google_protobuf_timestamp_pb.Timestamp): BlockResponse;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): BlockInfo | undefined;
  setInfo(value?: BlockInfo): BlockResponse;
  clearTranactionsList(): void;
  getTranactionsList(): Array<Transaction>;
  setTranactionsList(value: Array<Transaction>): BlockResponse;
  addTranactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
    hash: string;
    blockTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    info?: BlockInfo.AsObject;
    tranactionsList: Array<Transaction.AsObject>;
  };
}

export class BlockHeightRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): BlockHeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeightRequest): BlockHeightRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeightRequest;
  static deserializeBinaryFromReader(message: BlockHeightRequest, reader: jspb.BinaryReader): BlockHeightRequest;
}

export namespace BlockHeightRequest {
  export type AsObject = {
    hash: string;
  };
}

export class BlockHeightResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): BlockHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeightResponse): BlockHeightResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeightResponse;
  static deserializeBinaryFromReader(message: BlockHeightResponse, reader: jspb.BinaryReader): BlockHeightResponse;
}

export namespace BlockHeightResponse {
  export type AsObject = {
    height: number;
  };
}

export class BlockchainInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainInfoRequest): BlockchainInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockchainInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainInfoRequest;
  static deserializeBinaryFromReader(message: BlockchainInfoRequest, reader: jspb.BinaryReader): BlockchainInfoRequest;
}

export namespace BlockchainInfoRequest {
  export type AsObject = {};
}

export class BlockchainInfoResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): BlockchainInfoResponse;
  getLastBlockHash(): string;
  setLastBlockHash(value: string): BlockchainInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainInfoResponse): BlockchainInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockchainInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainInfoResponse;
  static deserializeBinaryFromReader(
    message: BlockchainInfoResponse,
    reader: jspb.BinaryReader,
  ): BlockchainInfoResponse;
}

export namespace BlockchainInfoResponse {
  export type AsObject = {
    height: number;
    lastBlockHash: string;
  };
}

export class NetworkInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoRequest): NetworkInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NetworkInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoRequest;
  static deserializeBinaryFromReader(message: NetworkInfoRequest, reader: jspb.BinaryReader): NetworkInfoRequest;
}

export namespace NetworkInfoRequest {
  export type AsObject = {};
}

export class NetworkInfoResponse extends jspb.Message {
  getPeerId(): string;
  setPeerId(value: string): NetworkInfoResponse;
  clearPeersList(): void;
  getPeersList(): Array<Peer>;
  setPeersList(value: Array<Peer>): NetworkInfoResponse;
  addPeers(value?: Peer, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoResponse): NetworkInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: NetworkInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoResponse;
  static deserializeBinaryFromReader(message: NetworkInfoResponse, reader: jspb.BinaryReader): NetworkInfoResponse;
}

export namespace NetworkInfoResponse {
  export type AsObject = {
    peerId: string;
    peersList: Array<Peer.AsObject>;
  };
}

export class TransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRequest): TransactionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRequest;
  static deserializeBinaryFromReader(message: TransactionRequest, reader: jspb.BinaryReader): TransactionRequest;
}

export namespace TransactionRequest {
  export type AsObject = {
    id: string;
  };
}

export class TransactionResponse extends jspb.Message {
  hasTranaction(): boolean;
  clearTranaction(): void;
  getTranaction(): Transaction | undefined;
  setTranaction(value?: Transaction): TransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    tranaction?: Transaction.AsObject;
  };
}

export class SendRawTransactionRequest extends jspb.Message {
  getData(): string;
  setData(value: string): SendRawTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRawTransactionRequest): SendRawTransactionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SendRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRawTransactionRequest;
  static deserializeBinaryFromReader(
    message: SendRawTransactionRequest,
    reader: jspb.BinaryReader,
  ): SendRawTransactionRequest;
}

export namespace SendRawTransactionRequest {
  export type AsObject = {
    data: string;
  };
}

export class SendRawTransactionResponse extends jspb.Message {
  getId(): string;
  setId(value: string): SendRawTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendRawTransactionResponse): SendRawTransactionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: SendRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRawTransactionResponse;
  static deserializeBinaryFromReader(
    message: SendRawTransactionResponse,
    reader: jspb.BinaryReader,
  ): SendRawTransactionResponse;
}

export namespace SendRawTransactionResponse {
  export type AsObject = {
    id: string;
  };
}

export class Validator extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): Validator;
  getNumber(): number;
  setNumber(value: number): Validator;
  getSequence(): number;
  setSequence(value: number): Validator;
  getStake(): number;
  setStake(value: number): Validator;
  getLastBondingHeight(): number;
  setLastBondingHeight(value: number): Validator;
  getLastJoinedHeight(): number;
  setLastJoinedHeight(value: number): Validator;
  getAddress(): string;
  setAddress(value: string): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    publicKey: string;
    number: number;
    sequence: number;
    stake: number;
    lastBondingHeight: number;
    lastJoinedHeight: number;
    address: string;
  };
}

export class Peer extends jspb.Message {
  getMoniker(): string;
  setMoniker(value: string): Peer;
  getNodeVersion(): Uint8Array | string;
  getNodeVersion_asU8(): Uint8Array;
  getNodeVersion_asB64(): string;
  setNodeVersion(value: Uint8Array | string): Peer;
  getPeerId(): string;
  setPeerId(value: string): Peer;
  getPublicKey(): string;
  setPublicKey(value: string): Peer;
  getInitialBlockDownload(): boolean;
  setInitialBlockDownload(value: boolean): Peer;
  getHeight(): number;
  setHeight(value: number): Peer;
  getReceivedMessages(): number;
  setReceivedMessages(value: number): Peer;
  getInvalidMessages(): number;
  setInvalidMessages(value: number): Peer;
  getReceivedBytes(): number;
  setReceivedBytes(value: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    moniker: string;
    nodeVersion: Uint8Array | string;
    peerId: string;
    publicKey: string;
    initialBlockDownload: boolean;
    height: number;
    receivedMessages: number;
    invalidMessages: number;
    receivedBytes: number;
  };
}

export class Account extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): Account;
  getNumber(): number;
  setNumber(value: number): Account;
  getSequence(): number;
  setSequence(value: number): Account;
  getBalance(): number;
  setBalance(value: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    address: string;
    number: number;
    sequence: number;
    balance: number;
  };
}

export class BlockInfo extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): BlockInfo;
  getLastBlockHash(): string;
  setLastBlockHash(value: string): BlockInfo;
  getStateHash(): string;
  setStateHash(value: string): BlockInfo;
  getTxIdsHash(): string;
  setTxIdsHash(value: string): BlockInfo;
  getLastCertificateHash(): string;
  setLastCertificateHash(value: string): BlockInfo;
  getSortitionSeed(): Uint8Array | string;
  getSortitionSeed_asU8(): Uint8Array;
  getSortitionSeed_asB64(): string;
  setSortitionSeed(value: Uint8Array | string): BlockInfo;
  getProposerAddress(): string;
  setProposerAddress(value: string): BlockInfo;
  getRound(): number;
  setRound(value: number): BlockInfo;
  clearCommittersList(): void;
  getCommittersList(): Array<number>;
  setCommittersList(value: Array<number>): BlockInfo;
  addCommitters(value: number, index?: number): number;
  clearAbsenteesList(): void;
  getAbsenteesList(): Array<number>;
  setAbsenteesList(value: Array<number>): BlockInfo;
  addAbsentees(value: number, index?: number): number;
  getSignature(): string;
  setSignature(value: string): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    version: number;
    lastBlockHash: string;
    stateHash: string;
    txIdsHash: string;
    lastCertificateHash: string;
    sortitionSeed: Uint8Array | string;
    proposerAddress: string;
    round: number;
    committersList: Array<number>;
    absenteesList: Array<number>;
    signature: string;
  };
}

export class Transaction extends jspb.Message {
  getId(): string;
  setId(value: string): Transaction;
  getVersion(): number;
  setVersion(value: number): Transaction;
  getStamp(): string;
  setStamp(value: string): Transaction;
  getSequence(): number;
  setSequence(value: number): Transaction;
  getFee(): number;
  setFee(value: number): Transaction;
  getType(): PayloadType;
  setType(value: PayloadType): Transaction;
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): Transaction;
  getMemo(): string;
  setMemo(value: string): Transaction;
  getPublicKey(): string;
  setPublicKey(value: string): Transaction;
  getSignature(): string;
  setSignature(value: string): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: string;
    version: number;
    stamp: string;
    sequence: number;
    fee: number;
    type: PayloadType;
    payload: Uint8Array | string;
    memo: string;
    publicKey: string;
    signature: string;
  };
}

export enum PayloadType {
  SEND_PAYLOAD = 0,
  BOND_PAYLOAD = 1,
  SORTITION_PAYLOAD = 2,
  UNBOND_PAYLOAD = 3,
}

export enum BlockVerbosity {
  BLOCK_HASH = 0,
  BLOCK_DATA = 1,
  BLOCK_TRANSACTIONS = 2,
}

export enum AccountVerbosity {
  ACCOUNT_INFO = 0,
  ACCOUNT_TRANSACTIONS = 1,
}
