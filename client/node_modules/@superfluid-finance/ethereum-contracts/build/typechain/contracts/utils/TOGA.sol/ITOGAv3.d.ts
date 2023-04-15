import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ITOGAv3Interface extends utils.Interface {
    functions: {
        "changeExitRate(address,int96)": FunctionFragment;
        "getCurrentPIC(address)": FunctionFragment;
        "getCurrentPICInfo(address)": FunctionFragment;
        "getDefaultExitRateFor(address,uint256)": FunctionFragment;
        "getMaxExitRateFor(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "changeExitRate" | "getCurrentPIC" | "getCurrentPICInfo" | "getDefaultExitRateFor" | "getMaxExitRateFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "changeExitRate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCurrentPIC", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getCurrentPICInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDefaultExitRateFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMaxExitRateFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "changeExitRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPICInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultExitRateFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxExitRateFor", data: BytesLike): Result;
    events: {
        "BondIncreased(address,uint256)": EventFragment;
        "ExitRateChanged(address,int96)": EventFragment;
        "NewPIC(address,address,uint256,int96)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BondIncreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExitRateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPIC"): EventFragment;
}
export interface BondIncreasedEventObject {
    token: string;
    additionalBond: BigNumber;
}
export type BondIncreasedEvent = TypedEvent<[
    string,
    BigNumber
], BondIncreasedEventObject>;
export type BondIncreasedEventFilter = TypedEventFilter<BondIncreasedEvent>;
export interface ExitRateChangedEventObject {
    token: string;
    exitRate: BigNumber;
}
export type ExitRateChangedEvent = TypedEvent<[
    string,
    BigNumber
], ExitRateChangedEventObject>;
export type ExitRateChangedEventFilter = TypedEventFilter<ExitRateChangedEvent>;
export interface NewPICEventObject {
    token: string;
    pic: string;
    bond: BigNumber;
    exitRate: BigNumber;
}
export type NewPICEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], NewPICEventObject>;
export type NewPICEventFilter = TypedEventFilter<NewPICEvent>;
export interface ITOGAv3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITOGAv3Interface;
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
        changeExitRate(token: PromiseOrValue<string>, newExitRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCurrentPIC(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            pic: string;
        }>;
        getCurrentPICInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            pic: string;
            bond: BigNumber;
            exitRate: BigNumber;
        }>;
        getDefaultExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            exitRate: BigNumber;
        }>;
        getMaxExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            exitRate: BigNumber;
        }>;
    };
    changeExitRate(token: PromiseOrValue<string>, newExitRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCurrentPIC(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getCurrentPICInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber
    ] & {
        pic: string;
        bond: BigNumber;
        exitRate: BigNumber;
    }>;
    getDefaultExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        changeExitRate(token: PromiseOrValue<string>, newExitRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getCurrentPIC(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getCurrentPICInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            pic: string;
            bond: BigNumber;
            exitRate: BigNumber;
        }>;
        getDefaultExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BondIncreased(address,uint256)"(token?: PromiseOrValue<string> | null, additionalBond?: null): BondIncreasedEventFilter;
        BondIncreased(token?: PromiseOrValue<string> | null, additionalBond?: null): BondIncreasedEventFilter;
        "ExitRateChanged(address,int96)"(token?: PromiseOrValue<string> | null, exitRate?: null): ExitRateChangedEventFilter;
        ExitRateChanged(token?: PromiseOrValue<string> | null, exitRate?: null): ExitRateChangedEventFilter;
        "NewPIC(address,address,uint256,int96)"(token?: PromiseOrValue<string> | null, pic?: null, bond?: null, exitRate?: null): NewPICEventFilter;
        NewPIC(token?: PromiseOrValue<string> | null, pic?: null, bond?: null, exitRate?: null): NewPICEventFilter;
    };
    estimateGas: {
        changeExitRate(token: PromiseOrValue<string>, newExitRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCurrentPIC(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentPICInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        changeExitRate(token: PromiseOrValue<string>, newExitRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCurrentPIC(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentPICInfo(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxExitRateFor(token: PromiseOrValue<string>, bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ITOGAv3.d.ts.map