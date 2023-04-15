import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IResolverInterface extends utils.Interface {
    functions: {
        "get(string)": FunctionFragment;
        "set(string,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "get" | "set"): FunctionFragment;
    encodeFunctionData(functionFragment: "get", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    events: {
        "Set(string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Set"): EventFragment;
}
export interface SetEventObject {
    name: string;
    target: string;
}
export type SetEvent = TypedEvent<[string, string], SetEventObject>;
export type SetEventFilter = TypedEventFilter<SetEvent>;
export interface IResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IResolverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        get(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        set(name: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    get(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    set(name: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        set(name: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Set(string,address)"(name?: PromiseOrValue<string> | null, target?: null): SetEventFilter;
        Set(name?: PromiseOrValue<string> | null, target?: null): SetEventFilter;
    };
    estimateGas: {
        get(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        set(name: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        set(name: PromiseOrValue<string>, target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IResolver.d.ts.map