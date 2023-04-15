import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IDASuperAppTesterInterface extends utils.Interface {
    functions: {
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "distribute(uint128)": FunctionFragment;
        "setForceGetSubscriptionByID()": FunctionFragment;
        "updateSubscription(address,uint128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated" | "distribute" | "setForceGetSubscriptionByID" | "updateSubscription"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "distribute", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setForceGetSubscriptionByID", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateSubscription", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setForceGetSubscriptionByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscription", data: BytesLike): Result;
    events: {
        "SubscriptionDataAfter(address,uint32,bool,uint128,uint256)": EventFragment;
        "SubscriptionDataBefore(address,uint32,bool,uint128,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SubscriptionDataAfter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionDataBefore"): EventFragment;
}
export interface SubscriptionDataAfterEventObject {
    publisher: string;
    indexId: number;
    approved: boolean;
    units: BigNumber;
    pendingDistribution: BigNumber;
}
export type SubscriptionDataAfterEvent = TypedEvent<[
    string,
    number,
    boolean,
    BigNumber,
    BigNumber
], SubscriptionDataAfterEventObject>;
export type SubscriptionDataAfterEventFilter = TypedEventFilter<SubscriptionDataAfterEvent>;
export interface SubscriptionDataBeforeEventObject {
    publisher: string;
    indexId: number;
    approved: boolean;
    units: BigNumber;
    pendingDistribution: BigNumber;
}
export type SubscriptionDataBeforeEvent = TypedEvent<[
    string,
    number,
    boolean,
    BigNumber,
    BigNumber
], SubscriptionDataBeforeEventObject>;
export type SubscriptionDataBeforeEventFilter = TypedEventFilter<SubscriptionDataBeforeEvent>;
export interface IDASuperAppTester extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDASuperAppTesterInterface;
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
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        distribute(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setForceGetSubscriptionByID(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSubscription(subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    distribute(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setForceGetSubscriptionByID(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSubscription(subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distribute(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setForceGetSubscriptionByID(overrides?: CallOverrides): Promise<void>;
        updateSubscription(subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SubscriptionDataAfter(address,uint32,bool,uint128,uint256)"(publisher?: null, indexId?: null, approved?: null, units?: null, pendingDistribution?: null): SubscriptionDataAfterEventFilter;
        SubscriptionDataAfter(publisher?: null, indexId?: null, approved?: null, units?: null, pendingDistribution?: null): SubscriptionDataAfterEventFilter;
        "SubscriptionDataBefore(address,uint32,bool,uint128,uint256)"(publisher?: null, indexId?: null, approved?: null, units?: null, pendingDistribution?: null): SubscriptionDataBeforeEventFilter;
        SubscriptionDataBefore(publisher?: null, indexId?: null, approved?: null, units?: null, pendingDistribution?: null): SubscriptionDataBeforeEventFilter;
    };
    estimateGas: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        distribute(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setForceGetSubscriptionByID(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSubscription(subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        distribute(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setForceGetSubscriptionByID(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscription(subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDASuperAppTester.d.ts.map