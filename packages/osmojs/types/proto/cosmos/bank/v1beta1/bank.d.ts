import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cypherd-io/osmonauts-helpers";
/** Params defines the parameters for the bank module. */
export interface Params {
    sendEnabled: SendEnabled[];
    defaultSendEnabled: boolean;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
    denom: string;
    enabled: boolean;
}
/** Input models transaction input. */
export interface Input {
    address: string;
    coins: Coin[];
}
/** Output models transaction outputs. */
export interface Output {
    address: string;
    coins: Coin[];
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
export interface Supply {
    total: Coin[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 10^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     */
    exponent: number;
    /** aliases is a list of string aliases for the given denom */
    aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denomUnits: DenomUnit[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     */
    symbol: string;
    /**
     * URI to a document (on or off-chain) that contains additional information. Optional.
     *
     * Since: cosmos-sdk 0.46
     */
    uri: string;
    /**
     * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
     * the document didn't change. Optional.
     *
     * Since: cosmos-sdk 0.46
     */
    uriHash: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const SendEnabled: {
    encode(message: SendEnabled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled;
    fromJSON(object: any): SendEnabled;
    toJSON(message: SendEnabled): unknown;
    fromPartial(object: DeepPartial<SendEnabled>): SendEnabled;
};
export declare const Input: {
    encode(message: Input, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Input;
    fromJSON(object: any): Input;
    toJSON(message: Input): unknown;
    fromPartial(object: DeepPartial<Input>): Input;
};
export declare const Output: {
    encode(message: Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Output;
    fromJSON(object: any): Output;
    toJSON(message: Output): unknown;
    fromPartial(object: DeepPartial<Output>): Output;
};
export declare const Supply: {
    encode(message: Supply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supply;
    fromJSON(object: any): Supply;
    toJSON(message: Supply): unknown;
    fromPartial(object: DeepPartial<Supply>): Supply;
};
export declare const DenomUnit: {
    encode(message: DenomUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit;
    fromJSON(object: any): DenomUnit;
    toJSON(message: DenomUnit): unknown;
    fromPartial(object: DeepPartial<DenomUnit>): DenomUnit;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
};
