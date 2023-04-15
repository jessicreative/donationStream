import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface CFALibraryMockInterface extends utils.Interface {
    functions: {
        "authorizeFlowOperatorWithFullControlTest(address,address)": FunctionFragment;
        "cfaV1()": FunctionFragment;
        "createFlowByOperatorTest(address,address,address,int96)": FunctionFragment;
        "createFlowTest(address,address,int96)": FunctionFragment;
        "deleteFlowByOperator(address,address,address)": FunctionFragment;
        "deleteFlowTest(address,address)": FunctionFragment;
        "revokeFlowOperatorWithFullControlTest(address,address)": FunctionFragment;
        "updateFlowByOperatorTest(address,address,address,int96)": FunctionFragment;
        "updateFlowOperatorPermissionsTest(address,address,uint8,int96)": FunctionFragment;
        "updateFlowTest(address,address,int96)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authorizeFlowOperatorWithFullControlTest" | "cfaV1" | "createFlowByOperatorTest" | "createFlowTest" | "deleteFlowByOperator" | "deleteFlowTest" | "revokeFlowOperatorWithFullControlTest" | "updateFlowByOperatorTest" | "updateFlowOperatorPermissionsTest" | "updateFlowTest"): FunctionFragment;
    encodeFunctionData(functionFragment: "authorizeFlowOperatorWithFullControlTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cfaV1", values?: undefined): string;
    encodeFunctionData(functionFragment: "createFlowByOperatorTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createFlowTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlowByOperator", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlowTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeFlowOperatorWithFullControlTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateFlowByOperatorTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowOperatorPermissionsTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "authorizeFlowOperatorWithFullControlTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cfaV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFlowByOperatorTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFlowTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlowByOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlowTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeFlowOperatorWithFullControlTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowByOperatorTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowOperatorPermissionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowTest", data: BytesLike): Result;
    events: {};
}
export interface CFALibraryMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CFALibraryMockInterface;
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
        authorizeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
            host: string;
            cfa: string;
        }>;
        createFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlowByOperator(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowOperatorPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    authorizeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
        host: string;
        cfa: string;
    }>;
    createFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlowByOperator(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowOperatorPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authorizeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
            host: string;
            cfa: string;
        }>;
        createFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deleteFlowByOperator(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deleteFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlowOperatorPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        authorizeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cfaV1(overrides?: CallOverrides): Promise<BigNumber>;
        createFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlowByOperator(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowOperatorPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cfaV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlowByOperator(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeFlowOperatorWithFullControlTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowByOperatorTest(sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowOperatorPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CFALibraryMock.d.ts.map