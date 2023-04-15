import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IDAv1LibrarySuperAppMockInterface extends utils.Interface {
    functions: {
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "approveSubscriptionTest(address,address,uint32)": FunctionFragment;
        "approveSubscriptionWithUserDataTest(address,address,uint32,bytes)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "calculateDistributionTest(address,address,uint32,uint256)": FunctionFragment;
        "claimTest(address,address,uint32,address)": FunctionFragment;
        "claimWithUserDataTest(address,address,uint32,address,bytes)": FunctionFragment;
        "createIndexTest(address,uint32)": FunctionFragment;
        "createIndexWithUserDataTest(address,uint32,bytes)": FunctionFragment;
        "deleteSubscriptionTest(address,address,uint32,address)": FunctionFragment;
        "deleteSubscriptionWithUserDataTest(address,address,uint32,address,bytes)": FunctionFragment;
        "distributeTest(address,uint32,uint256)": FunctionFragment;
        "distributeWithUserDataTest(address,uint32,uint256,bytes)": FunctionFragment;
        "getIndexTest(address,address,uint32)": FunctionFragment;
        "getSubscriptionByIDTest(address,bytes32)": FunctionFragment;
        "getSubscriptionTest(address,address,uint32,address)": FunctionFragment;
        "listSubscriptionsTest(address,address)": FunctionFragment;
        "revokeSubscriptionTest(address,address,uint32)": FunctionFragment;
        "revokeSubscriptionWithUserDataTest(address,address,uint32,bytes)": FunctionFragment;
        "updateIndexValueTest(address,uint32,uint128)": FunctionFragment;
        "updateIndexValueWithUserDataTest(address,uint32,uint128,bytes)": FunctionFragment;
        "updateSubscriptionUnitsTest(address,uint32,address,uint128)": FunctionFragment;
        "updateSubscriptionUnitsWithUserDataTest(address,uint32,address,uint128,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "approveSubscriptionTest" | "approveSubscriptionWithUserDataTest" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated" | "calculateDistributionTest" | "claimTest" | "claimWithUserDataTest" | "createIndexTest" | "createIndexWithUserDataTest" | "deleteSubscriptionTest" | "deleteSubscriptionWithUserDataTest" | "distributeTest" | "distributeWithUserDataTest" | "getIndexTest" | "getSubscriptionByIDTest" | "getSubscriptionTest" | "listSubscriptionsTest" | "revokeSubscriptionTest" | "revokeSubscriptionWithUserDataTest" | "updateIndexValueTest" | "updateIndexValueWithUserDataTest" | "updateSubscriptionUnitsTest" | "updateSubscriptionUnitsWithUserDataTest"): FunctionFragment;
    encodeFunctionData(functionFragment: "afterAgreementCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "afterAgreementTerminated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "afterAgreementUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "approveSubscriptionTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "approveSubscriptionWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementTerminated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "calculateDistributionTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createIndexTest", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createIndexWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "deleteSubscriptionTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "deleteSubscriptionWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "distributeTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "distributeWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getIndexTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getSubscriptionByIDTest", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSubscriptionTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "listSubscriptionsTest", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeSubscriptionTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "revokeSubscriptionWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateIndexValueTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateIndexValueWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateSubscriptionUnitsTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateSubscriptionUnitsWithUserDataTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveSubscriptionTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveSubscriptionWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDistributionTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIndexTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIndexWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSubscriptionTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSubscriptionWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionByIDTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listSubscriptionsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSubscriptionTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSubscriptionWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIndexValueTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIndexValueWithUserDataTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscriptionUnitsTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscriptionUnitsWithUserDataTest", data: BytesLike): Result;
    events: {};
}
export interface IDAv1LibrarySuperAppMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDAv1LibrarySuperAppMockInterface;
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
        afterAgreementCreated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        calculateDistributionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claimTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createIndexTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createIndexWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIndexTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscriptionByIDTest(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptionsTest(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        revokeSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateIndexValueTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateIndexValueWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSubscriptionUnitsTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSubscriptionUnitsWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    afterAgreementCreated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    calculateDistributionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        actualAmount: BigNumber;
        newIndexValue: BigNumber;
    }>;
    claimTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createIndexTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createIndexWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIndexTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        indexValue: BigNumber;
        totalUnitsApproved: BigNumber;
        totalUnitsPending: BigNumber;
    }>;
    getSubscriptionByIDTest(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        number,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        publisher: string;
        indexId: number;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    getSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    listSubscriptionsTest(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string[],
        number[],
        BigNumber[]
    ] & {
        publishers: string[];
        indexIds: number[];
        unitsList: BigNumber[];
    }>;
    revokeSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateIndexValueTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateIndexValueWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSubscriptionUnitsTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSubscriptionUnitsWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        afterAgreementCreated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        approveSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approveSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        calculateDistributionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claimTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        claimWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createIndexTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createIndexWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        deleteSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deleteSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        distributeTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        distributeWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getIndexTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscriptionByIDTest(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptionsTest(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        revokeSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        revokeSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        updateIndexValueTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateIndexValueWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        updateSubscriptionUnitsTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateSubscriptionUnitsWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        afterAgreementCreated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateDistributionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claimTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createIndexTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createIndexWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIndexTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionByIDTest(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        listSubscriptionsTest(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateIndexValueTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateIndexValueWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSubscriptionUnitsTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSubscriptionUnitsWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        afterAgreementCreated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(token: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateDistributionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createIndexTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createIndexWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIndexTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionByIDTest(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listSubscriptionsTest(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeSubscriptionTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeSubscriptionWithUserDataTest(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateIndexValueTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateIndexValueWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscriptionUnitsTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscriptionUnitsWithUserDataTest(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDAv1LibrarySuperAppMock.d.ts.map