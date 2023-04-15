import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ISETHCustomInterface extends utils.Interface {
    functions: {
        "downgradeToETH(uint256)": FunctionFragment;
        "upgradeByETH()": FunctionFragment;
        "upgradeByETHTo(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "downgradeToETH" | "upgradeByETH" | "upgradeByETHTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "downgradeToETH", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "upgradeByETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeByETHTo", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "downgradeToETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeByETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeByETHTo", data: BytesLike): Result;
    events: {};
}
export interface ISETHCustom extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISETHCustomInterface;
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
        downgradeToETH(wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeByETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeByETHTo(to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    downgradeToETH(wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeByETH(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeByETHTo(to: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        downgradeToETH(wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeByETH(overrides?: CallOverrides): Promise<void>;
        upgradeByETHTo(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        downgradeToETH(wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeByETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeByETHTo(to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        downgradeToETH(wad: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeByETH(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeByETHTo(to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISETHCustom.d.ts.map