import {
  OfflineSigner,
  GeneratedType,
  Registry,
} from "@cosmjs-rn/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from "@cosmjs-rn/stargate";
import * as ibcApplicationsTransferV1TxRegistry from "./applications/transfer/v1/tx.registry";
import * as ibcCoreChannelV1TxRegistry from "./core/channel/v1/tx.registry";
import * as ibcCoreClientV1TxRegistry from "./core/client/v1/tx.registry";
import * as ibcCoreConnectionV1TxRegistry from "./core/connection/v1/tx.registry";
import * as ibcApplicationsTransferV1TxAmino from "./applications/transfer/v1/tx.amino";
import * as ibcCoreChannelV1TxAmino from "./core/channel/v1/tx.amino";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino";
import * as ibcCoreConnectionV1TxAmino from "./core/connection/v1/tx.amino";
export const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([
    ...defaultTypes,
    ...ibcApplicationsTransferV1TxRegistry.registry,
    ...ibcCoreChannelV1TxRegistry.registry,
    ...ibcCoreClientV1TxRegistry.registry,
    ...ibcCoreConnectionV1TxRegistry.registry,
  ]);
  const aminoTypes = new AminoTypes({
    ...ibcApplicationsTransferV1TxAmino.AminoConverter,
    ...ibcCoreChannelV1TxAmino.AminoConverter,
    ...ibcCoreClientV1TxAmino.AminoConverter,
    ...ibcCoreConnectionV1TxAmino.AminoConverter,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    }
  );
  return client;
};
