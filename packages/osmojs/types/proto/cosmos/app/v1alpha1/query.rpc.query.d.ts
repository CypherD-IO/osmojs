import { Rpc } from "@cypherd-io/osmonauts-helpers";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
  config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  constructor(rpc: Rpc);
  config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
