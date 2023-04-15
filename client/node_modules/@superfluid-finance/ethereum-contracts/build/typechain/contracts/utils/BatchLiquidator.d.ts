import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface BatchLiquidatorInterface extends utils.Interface {
    functions: {
        "cfa()": FunctionFragment;
        "deleteFlow(address,address,address)": FunctionFragment;
        "deleteFlows(address,address[],address[])": FunctionFragment;
        "host()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cfa" | "deleteFlow" | "deleteFlows" | "host"): FunctionFragment;
    encodeFunctionData(functionFragment: "cfa", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlows", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "host", values?: undefined): string;
    decodeFunctionResult(functionFragment: "cfa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "host", data: BytesLike): Result;
    events: {};
}
export interface BatchLiquidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BatchLiquidatorInterface;
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
        cfa(overrides?: CallOverrides): Promise<[string]>;
        deleteFlow(superToken: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlows(superToken: PromiseOrValue<string>, senders: PromiseOrValue<string>[], receivers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        host(overrides?: CallOverrides): Promise<[string]>;
    };
    cfa(overrides?: CallOverrides): Promise<string>;
    deleteFlow(superToken: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlows(superToken: PromiseOrValue<string>, senders: PromiseOrValue<string>[], receivers: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    host(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        cfa(overrides?: CallOverrides): Promise<string>;
        deleteFlow(superToken: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deleteFlows(superToken: PromiseOrValue<string>, senders: PromiseOrValue<string>[], receivers: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        host(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        cfa(overrides?: CallOverrides): Promise<BigNumber>;
        deleteFlow(superToken: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlows(superToken: PromiseOrValue<string>, senders: PromiseOrValue<string>[], receivers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        host(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cfa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deleteFlow(superToken: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlows(superToken: PromiseOrValue<string>, senders: PromiseOrValue<string>[], receivers: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        host(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BatchLiquidator.d.ts.map