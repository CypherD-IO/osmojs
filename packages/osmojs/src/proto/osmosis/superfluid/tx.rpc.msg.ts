import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Rpc } from "@cypherd-io/osmonauts-helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
  /*Execute superfluid delegation for a lockup*/

  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
  /*Execute superfluid undelegation for a lockup*/

  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
  /*For a given lock that is being superfluidly undelegated,
  also unbond the underlying lock.*/

  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
  /*Execute lockup lock and superfluid delegation in a single msg*/

  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.superfluidDelegate = this.superfluidDelegate.bind(this);
    this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
    this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
    this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
    this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
  }

  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse> {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
    return promise.then(data => MsgSuperfluidDelegateResponse.decode(new _m0.Reader(data)));
  }

  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse> {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
    return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new _m0.Reader(data)));
  }

  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse> {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
    return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new _m0.Reader(data)));
  }

  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse> {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
    return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new _m0.Reader(data)));
  }

  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse> {
    const data = MsgUnPoolWhitelistedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
    return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new _m0.Reader(data)));
  }

}
