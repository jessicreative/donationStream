import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface CFAv1ForwarderInterface extends utils.Interface {
    functions: {
        "createFlow(address,address,address,int96,bytes)": FunctionFragment;
        "deleteFlow(address,address,address,bytes)": FunctionFragment;
        "getAccountFlowInfo(address,address)": FunctionFragment;
        "getAccountFlowrate(address,address)": FunctionFragment;
        "getBufferAmountByFlowrate(address,int96)": FunctionFragment;
        "getFlowInfo(address,address,address)": FunctionFragment;
        "getFlowOperatorPermissions(address,address,address)": FunctionFragment;
        "getFlowrate(address,address,address)": FunctionFragment;
        "grantPermissions(address,address)": FunctionFragment;
        "revokePermissions(address,address)": FunctionFragment;
        "setFlowrate(address,address,int96)": FunctionFragment;
        "setFlowrateFrom(address,address,address,int96)": FunctionFragment;
        "updateFlow(address,address,address,int96,bytes)": FunctionFragment;
        "updateFlowOperatorPermissions(address,address,uint8,int96)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createFlow" | "deleteFlow" | "getAccountFlowInfo" | "getAccountFlowrate" | "getBufferAmountByFlowrate" | "getFlowInfo" | "getFlowOperatorPermissions" | "getFlowrate" | "grantPermissions" | "revokePermissions" | "setFlowrate" | "setFlowrateFrom" | "updateFlow" | "updateFlowOperatorPermissions"): FunctionFragment;
    encodeFunctionData(functionFragment: "createFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getAccountFlowInfo", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAccountFlowrate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBufferAmountByFlowrate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFlowInfo", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowOperatorPermissions", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowrate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "grantPermissions", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokePermissions", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFlowrate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setFlowrateFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowOperatorPermissions", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "createFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountFlowInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountFlowrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBufferAmountByFlowrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowOperatorPermissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantPermissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePermissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlowrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlowrateFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowOperatorPermissions", data: BytesLike): Result;
    events: {};
}
export interface CFAv1Forwarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CFAv1ForwarderInterface;
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
        createFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowrate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getAccountFlowrate(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            flowrate: BigNumber;
        }>;
        getBufferAmountByFlowrate(token: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            bufferAmount: BigNumber;
        }>;
        getFlowInfo(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowrate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowOperatorPermissions(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber
        ] & {
            permissions: number;
            flowrateAllowance: BigNumber;
        }>;
        getFlowrate(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            flowrate: BigNumber;
        }>;
        grantPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokePermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFlowrate(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFlowrateFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowrateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastUpdated: BigNumber;
        flowrate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getAccountFlowrate(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getBufferAmountByFlowrate(token: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getFlowInfo(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastUpdated: BigNumber;
        flowrate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getFlowOperatorPermissions(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber
    ] & {
        permissions: number;
        flowrateAllowance: BigNumber;
    }>;
    getFlowrate(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    grantPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokePermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFlowrate(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFlowrateFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowrateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowrate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getAccountFlowrate(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBufferAmountByFlowrate(token: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowInfo(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lastUpdated: BigNumber;
            flowrate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowOperatorPermissions(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber
        ] & {
            permissions: number;
            flowrateAllowance: BigNumber;
        }>;
        getFlowrate(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        grantPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        revokePermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setFlowrate(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        setFlowrateFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        updateFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowrateAllowance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        createFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountFlowrate(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBufferAmountByFlowrate(token: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowInfo(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowOperatorPermissions(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowrate(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        grantPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokePermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFlowrate(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFlowrateFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowrateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountFlowrate(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBufferAmountByFlowrate(token: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowInfo(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowOperatorPermissions(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowrate(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokePermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFlowrate(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFlowrateFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowrate: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowrateAllowance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CFAv1Forwarder.d.ts.map