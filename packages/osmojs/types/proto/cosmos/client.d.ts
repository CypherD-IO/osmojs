import { OfflineSigner } from "@cosmjs-rn/proto-signing";
import { SigningStargateClient } from "@cosmjs-rn/stargate";
export declare const getSigningCosmosClient: ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
}) => Promise<SigningStargateClient>;
