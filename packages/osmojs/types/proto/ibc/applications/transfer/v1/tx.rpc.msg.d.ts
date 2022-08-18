import { Rpc } from "@cypherd-io/osmonauts-helpers";
import { MsgTransfer, MsgTransferResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  constructor(rpc: Rpc);
  transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}
