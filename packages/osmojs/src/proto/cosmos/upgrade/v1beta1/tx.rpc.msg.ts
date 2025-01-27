import { Plan } from "./upgrade";
import { Rpc } from "@cypherd-io/osmonauts-helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgSoftwareUpgrade,
  MsgSoftwareUpgradeResponse,
  MsgCancelUpgrade,
  MsgCancelUpgradeResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  softwareUpgrade(
    request: MsgSoftwareUpgrade
  ): Promise<MsgSoftwareUpgradeResponse>;
  /*SoftwareUpgrade is a governance operation for initiating a software upgrade.

  Since: cosmos-sdk 0.46*/

  cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
  /*CancelUpgrade is a governance operation for cancelling a previously
  approvid software upgrade.

  Since: cosmos-sdk 0.46*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.softwareUpgrade = this.softwareUpgrade.bind(this);
    this.cancelUpgrade = this.cancelUpgrade.bind(this);
  }

  softwareUpgrade(
    request: MsgSoftwareUpgrade
  ): Promise<MsgSoftwareUpgradeResponse> {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Msg",
      "SoftwareUpgrade",
      data
    );
    return promise.then((data) =>
      MsgSoftwareUpgradeResponse.decode(new _m0.Reader(data))
    );
  }

  cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse> {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Msg",
      "CancelUpgrade",
      data
    );
    return promise.then((data) =>
      MsgCancelUpgradeResponse.decode(new _m0.Reader(data))
    );
  }
}
