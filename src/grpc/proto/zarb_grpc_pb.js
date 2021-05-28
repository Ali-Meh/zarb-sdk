// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var zarb_pb = require('./zarb_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_zarb_AccountRequest(arg) {
  if (!(arg instanceof zarb_pb.AccountRequest)) {
    throw new Error('Expected argument of type zarb.AccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_AccountRequest(buffer_arg) {
  return zarb_pb.AccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_AccountResponse(arg) {
  if (!(arg instanceof zarb_pb.AccountResponse)) {
    throw new Error('Expected argument of type zarb.AccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_AccountResponse(buffer_arg) {
  return zarb_pb.AccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockHeightRequest(arg) {
  if (!(arg instanceof zarb_pb.BlockHeightRequest)) {
    throw new Error('Expected argument of type zarb.BlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockHeightRequest(buffer_arg) {
  return zarb_pb.BlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockHeightResponse(arg) {
  if (!(arg instanceof zarb_pb.BlockHeightResponse)) {
    throw new Error('Expected argument of type zarb.BlockHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockHeightResponse(buffer_arg) {
  return zarb_pb.BlockHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockRequest(arg) {
  if (!(arg instanceof zarb_pb.BlockRequest)) {
    throw new Error('Expected argument of type zarb.BlockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockRequest(buffer_arg) {
  return zarb_pb.BlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockResponse(arg) {
  if (!(arg instanceof zarb_pb.BlockResponse)) {
    throw new Error('Expected argument of type zarb.BlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockResponse(buffer_arg) {
  return zarb_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockchainInfoRequest(arg) {
  if (!(arg instanceof zarb_pb.BlockchainInfoRequest)) {
    throw new Error('Expected argument of type zarb.BlockchainInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockchainInfoRequest(buffer_arg) {
  return zarb_pb.BlockchainInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_BlockchainInfoResponse(arg) {
  if (!(arg instanceof zarb_pb.BlockchainInfoResponse)) {
    throw new Error('Expected argument of type zarb.BlockchainInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_BlockchainInfoResponse(buffer_arg) {
  return zarb_pb.BlockchainInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_NetworkInfoRequest(arg) {
  if (!(arg instanceof zarb_pb.NetworkInfoRequest)) {
    throw new Error('Expected argument of type zarb.NetworkInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_NetworkInfoRequest(buffer_arg) {
  return zarb_pb.NetworkInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_NetworkInfoResponse(arg) {
  if (!(arg instanceof zarb_pb.NetworkInfoResponse)) {
    throw new Error('Expected argument of type zarb.NetworkInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_NetworkInfoResponse(buffer_arg) {
  return zarb_pb.NetworkInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_SendRawTransactionRequest(arg) {
  if (!(arg instanceof zarb_pb.SendRawTransactionRequest)) {
    throw new Error('Expected argument of type zarb.SendRawTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_SendRawTransactionRequest(buffer_arg) {
  return zarb_pb.SendRawTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_SendRawTransactionResponse(arg) {
  if (!(arg instanceof zarb_pb.SendRawTransactionResponse)) {
    throw new Error('Expected argument of type zarb.SendRawTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_SendRawTransactionResponse(buffer_arg) {
  return zarb_pb.SendRawTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_TransactionRequest(arg) {
  if (!(arg instanceof zarb_pb.TransactionRequest)) {
    throw new Error('Expected argument of type zarb.TransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_TransactionRequest(buffer_arg) {
  return zarb_pb.TransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_TransactionResponse(arg) {
  if (!(arg instanceof zarb_pb.TransactionResponse)) {
    throw new Error('Expected argument of type zarb.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_TransactionResponse(buffer_arg) {
  return zarb_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_ValidatorByNumberRequest(arg) {
  if (!(arg instanceof zarb_pb.ValidatorByNumberRequest)) {
    throw new Error('Expected argument of type zarb.ValidatorByNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_ValidatorByNumberRequest(buffer_arg) {
  return zarb_pb.ValidatorByNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_ValidatorRequest(arg) {
  if (!(arg instanceof zarb_pb.ValidatorRequest)) {
    throw new Error('Expected argument of type zarb.ValidatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_ValidatorRequest(buffer_arg) {
  return zarb_pb.ValidatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_ValidatorResponse(arg) {
  if (!(arg instanceof zarb_pb.ValidatorResponse)) {
    throw new Error('Expected argument of type zarb.ValidatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_ValidatorResponse(buffer_arg) {
  return zarb_pb.ValidatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_ValidatorsRequest(arg) {
  if (!(arg instanceof zarb_pb.ValidatorsRequest)) {
    throw new Error('Expected argument of type zarb.ValidatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_ValidatorsRequest(buffer_arg) {
  return zarb_pb.ValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_zarb_ValidatorsResponse(arg) {
  if (!(arg instanceof zarb_pb.ValidatorsResponse)) {
    throw new Error('Expected argument of type zarb.ValidatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_zarb_ValidatorsResponse(buffer_arg) {
  return zarb_pb.ValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ZarbService = exports.ZarbService = {
  getBlock: {
    path: '/zarb.Zarb/GetBlock',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.BlockRequest,
    responseType: zarb_pb.BlockResponse,
    requestSerialize: serialize_zarb_BlockRequest,
    requestDeserialize: deserialize_zarb_BlockRequest,
    responseSerialize: serialize_zarb_BlockResponse,
    responseDeserialize: deserialize_zarb_BlockResponse,
  },
  getBlockHeight: {
    path: '/zarb.Zarb/GetBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.BlockHeightRequest,
    responseType: zarb_pb.BlockHeightResponse,
    requestSerialize: serialize_zarb_BlockHeightRequest,
    requestDeserialize: deserialize_zarb_BlockHeightRequest,
    responseSerialize: serialize_zarb_BlockHeightResponse,
    responseDeserialize: deserialize_zarb_BlockHeightResponse,
  },
  getTransaction: {
    path: '/zarb.Zarb/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.TransactionRequest,
    responseType: zarb_pb.TransactionResponse,
    requestSerialize: serialize_zarb_TransactionRequest,
    requestDeserialize: deserialize_zarb_TransactionRequest,
    responseSerialize: serialize_zarb_TransactionResponse,
    responseDeserialize: deserialize_zarb_TransactionResponse,
  },
  getAccount: {
    path: '/zarb.Zarb/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.AccountRequest,
    responseType: zarb_pb.AccountResponse,
    requestSerialize: serialize_zarb_AccountRequest,
    requestDeserialize: deserialize_zarb_AccountRequest,
    responseSerialize: serialize_zarb_AccountResponse,
    responseDeserialize: deserialize_zarb_AccountResponse,
  },
  getValidators: {
    path: '/zarb.Zarb/GetValidators',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.ValidatorsRequest,
    responseType: zarb_pb.ValidatorsResponse,
    requestSerialize: serialize_zarb_ValidatorsRequest,
    requestDeserialize: deserialize_zarb_ValidatorsRequest,
    responseSerialize: serialize_zarb_ValidatorsResponse,
    responseDeserialize: deserialize_zarb_ValidatorsResponse,
  },
  getValidator: {
    path: '/zarb.Zarb/GetValidator',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.ValidatorRequest,
    responseType: zarb_pb.ValidatorResponse,
    requestSerialize: serialize_zarb_ValidatorRequest,
    requestDeserialize: deserialize_zarb_ValidatorRequest,
    responseSerialize: serialize_zarb_ValidatorResponse,
    responseDeserialize: deserialize_zarb_ValidatorResponse,
  },
  getValidatorByNumber: {
    path: '/zarb.Zarb/GetValidatorByNumber',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.ValidatorByNumberRequest,
    responseType: zarb_pb.ValidatorResponse,
    requestSerialize: serialize_zarb_ValidatorByNumberRequest,
    requestDeserialize: deserialize_zarb_ValidatorByNumberRequest,
    responseSerialize: serialize_zarb_ValidatorResponse,
    responseDeserialize: deserialize_zarb_ValidatorResponse,
  },
  getBlockchainInfo: {
    path: '/zarb.Zarb/GetBlockchainInfo',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.BlockchainInfoRequest,
    responseType: zarb_pb.BlockchainInfoResponse,
    requestSerialize: serialize_zarb_BlockchainInfoRequest,
    requestDeserialize: deserialize_zarb_BlockchainInfoRequest,
    responseSerialize: serialize_zarb_BlockchainInfoResponse,
    responseDeserialize: deserialize_zarb_BlockchainInfoResponse,
  },
  getNetworkInfo: {
    path: '/zarb.Zarb/GetNetworkInfo',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.NetworkInfoRequest,
    responseType: zarb_pb.NetworkInfoResponse,
    requestSerialize: serialize_zarb_NetworkInfoRequest,
    requestDeserialize: deserialize_zarb_NetworkInfoRequest,
    responseSerialize: serialize_zarb_NetworkInfoResponse,
    responseDeserialize: deserialize_zarb_NetworkInfoResponse,
  },
  sendRawTransaction: {
    path: '/zarb.Zarb/SendRawTransaction',
    requestStream: false,
    responseStream: false,
    requestType: zarb_pb.SendRawTransactionRequest,
    responseType: zarb_pb.SendRawTransactionResponse,
    requestSerialize: serialize_zarb_SendRawTransactionRequest,
    requestDeserialize: deserialize_zarb_SendRawTransactionRequest,
    responseSerialize: serialize_zarb_SendRawTransactionResponse,
    responseDeserialize: deserialize_zarb_SendRawTransactionResponse,
  },
};

exports.ZarbClient = grpc.makeGenericClientConstructor(ZarbService);
