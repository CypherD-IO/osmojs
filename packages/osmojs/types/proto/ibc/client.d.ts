import { OfflineSigner, GeneratedType } from "@cosmjs-rn/proto-signing";
import { SigningStargateClient } from "@cosmjs-rn/stargate";
export declare const getSigningIbcClient: ({
  rpcEndpoint,
  signer,
  defaultTypes,
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
