import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface CustomSuperTokenProxyMockInterface extends utils.Interface {
    functions: {
        "callSelfApproveFor(address,address,uint256)": FunctionFragment;
        "callSelfBurn(address,uint256,bytes)": FunctionFragment;
        "callSelfTransferFrom(address,address,address,uint256)": FunctionFragment;
        "delegatecallSelfMint(address,uint256,bytes)": FunctionFragment;
        "getFirstCustomTokenStorageSlot()": FunctionFragment;
        "initializeProxy(address)": FunctionFragment;
        "selfMint(address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "callSelfApproveFor" | "callSelfBurn" | "callSelfTransferFrom" | "delegatecallSelfMint" | "getFirstCustomTokenStorageSlot" | "initializeProxy" | "selfMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "callSelfApproveFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "callSelfBurn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callSelfTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "delegatecallSelfMint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFirstCustomTokenStorageSlot", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeProxy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "selfMint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "callSelfApproveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSelfBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSelfTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatecallSelfMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstCustomTokenStorageSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfMint", data: BytesLike): Result;
    events: {};
}
export interface CustomSuperTokenProxyMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CustomSuperTokenProxyMockInterface;
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
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegatecallSelfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<[BigNumber] & {
            slot: BigNumber;
        }>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegatecallSelfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
    initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        delegatecallSelfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        selfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegatecallSelfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegatecallSelfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selfMint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CustomSuperTokenProxyMock.d.ts.map