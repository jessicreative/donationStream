import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SuperTokenLibraryCFAMockInterface extends utils.Interface {
    functions: {
        "createFlowFromTest(address,address,address,int96)": FunctionFragment;
        "createFlowTest(address,address,int96)": FunctionFragment;
        "deleteFlowFromTest(address,address,address)": FunctionFragment;
        "deleteFlowTest(address,address,address)": FunctionFragment;
        "getBufferAmountByFlowRateTest(address,int96)": FunctionFragment;
        "getFlowInfoTest(address,address,address)": FunctionFragment;
        "getFlowPermissionsTest(address,address,address)": FunctionFragment;
        "getFlowRateTest(address,address,address)": FunctionFragment;
        "getNetFlowInfoTest(address,address)": FunctionFragment;
        "getNetFlowRateTest(address,address)": FunctionFragment;
        "revokeFlowPermissionsTest(address,address)": FunctionFragment;
        "setFlowPermissionsTest(address,address,bool,bool,bool,int96)": FunctionFragment;
        "setMaxFlowPermissionsTest(address,address)": FunctionFragment;
        "updateFlowFromTest(address,address,address,int96)": FunctionFragment;
        "updateFlowTest(address,address,int96)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createFlowFromTest" | "createFlowTest" | "deleteFlowFromTest" | "deleteFlowTest" | "getBufferAmountByFlowRateTest" | "getFlowInfoTest" | "getFlowPermissionsTest" | "getFlowRateTest" | "getNetFlowInfoTest" | "getNetFlowRateTest" | "revokeFlowPermissionsTest" | "setFlowPermissionsTest" | "setMaxFlowPermissionsTest" | "updateFlowFromTest" | "updateFlowTest"): FunctionFragment;
    encodeFunctionData(functionFragment: "createFlowFromTest", values: [
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
    encodeFunctionData(functionFragment: "deleteFlowFromTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlowTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getBufferAmountByFlowRateTest", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFlowInfoTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowPermissionsTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowRateTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getNetFlowInfoTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNetFlowRateTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeFlowPermissionsTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFlowPermissionsTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setMaxFlowPermissionsTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateFlowFromTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "createFlowFromTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFlowTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlowFromTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlowTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBufferAmountByFlowRateTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowInfoTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowPermissionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowRateTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetFlowInfoTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetFlowRateTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeFlowPermissionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlowPermissionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxFlowPermissionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowFromTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowTest", data: BytesLike): Result;
    events: {};
}
export interface SuperTokenLibraryCFAMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperTokenLibraryCFAMockInterface;
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
        createFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlowTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBufferAmountByFlowRateTest(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            bufferAmount: BigNumber;
        }>;
        getFlowInfoTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowPermissionsTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            boolean,
            BigNumber
        ] & {
            allowCreate: boolean;
            allowUpdate: boolean;
            allowDelete: boolean;
            flowRateAllowance: BigNumber;
        }>;
        getFlowRateTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            rate: BigNumber;
        }>;
        getNetFlowInfoTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getNetFlowRateTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            netFlowRate: BigNumber;
        }>;
        revokeFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFlowPermissionsTest(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, allowCreate: PromiseOrValue<boolean>, allowUpdate: PromiseOrValue<boolean>, allowDelete: PromiseOrValue<boolean>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlowTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBufferAmountByFlowRateTest(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getFlowInfoTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastUpdated: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getFlowPermissionsTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        boolean,
        BigNumber
    ] & {
        allowCreate: boolean;
        allowUpdate: boolean;
        allowDelete: boolean;
        flowRateAllowance: BigNumber;
    }>;
    getFlowRateTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getNetFlowInfoTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastUpdated: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getNetFlowRateTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    revokeFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFlowPermissionsTest(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, allowCreate: PromiseOrValue<boolean>, allowUpdate: PromiseOrValue<boolean>, allowDelete: PromiseOrValue<boolean>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deleteFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deleteFlowTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getBufferAmountByFlowRateTest(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowInfoTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowPermissionsTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            boolean,
            BigNumber
        ] & {
            allowCreate: boolean;
            allowUpdate: boolean;
            allowDelete: boolean;
            flowRateAllowance: BigNumber;
        }>;
        getFlowRateTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowInfoTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getNetFlowRateTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFlowPermissionsTest(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, allowCreate: PromiseOrValue<boolean>, allowUpdate: PromiseOrValue<boolean>, allowDelete: PromiseOrValue<boolean>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        createFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlowTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBufferAmountByFlowRateTest(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowInfoTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowPermissionsTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowRateTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowInfoTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowRateTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFlowPermissionsTest(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, allowCreate: PromiseOrValue<boolean>, allowUpdate: PromiseOrValue<boolean>, allowDelete: PromiseOrValue<boolean>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlowTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBufferAmountByFlowRateTest(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowInfoTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowPermissionsTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowRateTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetFlowInfoTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetFlowRateTest(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFlowPermissionsTest(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, allowCreate: PromiseOrValue<boolean>, allowUpdate: PromiseOrValue<boolean>, allowDelete: PromiseOrValue<boolean>, flowRateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxFlowPermissionsTest(flowOperator: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowFromTest(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowTest(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperTokenLibraryCFAMock.d.ts.map