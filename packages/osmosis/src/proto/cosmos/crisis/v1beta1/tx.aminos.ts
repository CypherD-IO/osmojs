import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export interface AminoMsgVerifyInvariant extends AminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
  };
}
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariantModuleName,
      invariantRoute
    }: MsgVerifyInvariant): AminoMsgVerifyInvariant["value"] => {
      return {
        sender,
        invariant_module_name: invariantModuleName,
        invariant_route: invariantRoute
      };
    },
    fromAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }: AminoMsgVerifyInvariant["value"]): MsgVerifyInvariant => {
      return {
        sender,
        invariantModuleName: invariant_module_name,
        invariantRoute: invariant_route
      };
    }
  }
};