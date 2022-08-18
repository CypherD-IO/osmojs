import { SigningStargateClient } from "@cosmjs-rn/stargate";
export declare const estimateOsmoFee: (
  client: SigningStargateClient,
  address: string,
  msgs: any[],
  memo: string
) => Promise<import("@cosmjs-rn/stargate").StdFee>;
