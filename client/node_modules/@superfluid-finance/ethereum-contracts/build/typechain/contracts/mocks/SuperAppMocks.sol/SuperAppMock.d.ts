import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SuperAppMockInterface extends utils.Interface {
    functions: {
        "actionAgreementRevert(address,string,bytes)": FunctionFragment;
        "actionAlteringCtx(bytes)": FunctionFragment;
        "actionAssert(bytes)": FunctionFragment;
        "actionCallActionNoop(bytes)": FunctionFragment;
        "actionCallActionNoopThroughAux(bytes)": FunctionFragment;
        "actionCallActionRevert(string,bytes)": FunctionFragment;
        "actionCallActionWithInvalidCtx(string,bytes)": FunctionFragment;
        "actionCallAgreementWithInvalidCtx(address,bytes)": FunctionFragment;
        "actionCallAgreementWithoutCtx(bytes)": FunctionFragment;
        "actionCallAppActionWithoutCtx(bytes)": FunctionFragment;
        "actionCallBadAction(bytes)": FunctionFragment;
        "actionExpectMsgSender(address,bytes)": FunctionFragment;
        "actionNoop(bytes)": FunctionFragment;
        "actionPingAgreement(address,uint256,bytes)": FunctionFragment;
        "actionPingAgreementThroughAux(address,uint256,bytes)": FunctionFragment;
        "actionReturnEmptyCtx(bytes)": FunctionFragment;
        "actionRevert(bytes)": FunctionFragment;
        "actionRevertWithReason(string,bytes)": FunctionFragment;
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "allowCompositeApp(address)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "setNextCallbackAction(uint8,bytes)": FunctionFragment;
        "tryRegisterApp(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "actionAgreementRevert" | "actionAlteringCtx" | "actionAssert" | "actionCallActionNoop" | "actionCallActionNoopThroughAux" | "actionCallActionRevert" | "actionCallActionWithInvalidCtx" | "actionCallAgreementWithInvalidCtx" | "actionCallAgreementWithoutCtx" | "actionCallAppActionWithoutCtx" | "actionCallBadAction" | "actionExpectMsgSender" | "actionNoop" | "actionPingAgreement" | "actionPingAgreementThroughAux" | "actionReturnEmptyCtx" | "actionRevert" | "actionRevertWithReason" | "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "allowCompositeApp" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated" | "setNextCallbackAction" | "tryRegisterApp"): FunctionFragment;
    encodeFunctionData(functionFragment: "actionAgreementRevert", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "actionAlteringCtx", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionAssert", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallActionNoop", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallActionNoopThroughAux", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallActionRevert", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallActionWithInvalidCtx", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallAgreementWithInvalidCtx", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallAgreementWithoutCtx", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallAppActionWithoutCtx", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionCallBadAction", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionExpectMsgSender", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionNoop", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionPingAgreement", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "actionPingAgreementThroughAux", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "actionReturnEmptyCtx", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionRevert", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "actionRevertWithReason", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
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
    encodeFunctionData(functionFragment: "allowCompositeApp", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "setNextCallbackAction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "tryRegisterApp", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "actionAgreementRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionAlteringCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionAssert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallActionNoop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallActionNoopThroughAux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallActionRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallActionWithInvalidCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallAgreementWithInvalidCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallAgreementWithoutCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallAppActionWithoutCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionCallBadAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionExpectMsgSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionNoop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionPingAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionPingAgreementThroughAux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionReturnEmptyCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionRevertWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCompositeApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNextCallbackAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryRegisterApp", data: BytesLike): Result;
    events: {
        "NoopEvent(uint8,uint8,bytes4)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NoopEvent"): EventFragment;
}
export interface NoopEventEventObject {
    appLevel: number;
    callType: number;
    agreementSelector: string;
}
export type NoopEventEvent = TypedEvent<[
    number,
    number,
    string
], NoopEventEventObject>;
export type NoopEventEventFilter = TypedEventFilter<NoopEventEvent>;
export interface SuperAppMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperAppMockInterface;
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
        actionAgreementRevert(agreement: PromiseOrValue<string>, reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionAlteringCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            newCtx: string;
        }>;
        actionAssert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        actionCallActionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallActionNoopThroughAux(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallActionRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallActionWithInvalidCtx(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallAgreementWithInvalidCtx(agreement: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallAgreementWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallAppActionWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionCallBadAction(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionExpectMsgSender(expectedMsgSender: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionPingAgreement(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionPingAgreementThroughAux(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionReturnEmptyCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        actionRevert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        actionRevertWithReason(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowCompositeApp(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        setNextCallbackAction(actionType: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryRegisterApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    actionAgreementRevert(agreement: PromiseOrValue<string>, reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionAlteringCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    actionAssert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    actionCallActionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallActionNoopThroughAux(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallActionRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallActionWithInvalidCtx(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallAgreementWithInvalidCtx(agreement: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallAgreementWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallAppActionWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionCallBadAction(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionExpectMsgSender(expectedMsgSender: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionPingAgreement(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionPingAgreementThroughAux(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionReturnEmptyCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    actionRevert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    actionRevertWithReason(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowCompositeApp(target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    setNextCallbackAction(actionType: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryRegisterApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        actionAgreementRevert(agreement: PromiseOrValue<string>, reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionAlteringCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionAssert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionCallActionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionCallActionNoopThroughAux(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionCallActionRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionCallActionWithInvalidCtx(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionCallAgreementWithInvalidCtx(agreement: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionCallAgreementWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionCallAppActionWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionCallBadAction(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionExpectMsgSender(expectedMsgSender: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionPingAgreement(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        actionPingAgreementThroughAux(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionReturnEmptyCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionRevert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionRevertWithReason(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        allowCompositeApp(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        setNextCallbackAction(actionType: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        tryRegisterApp(configWord: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "NoopEvent(uint8,uint8,bytes4)"(appLevel?: null, callType?: null, agreementSelector?: null): NoopEventEventFilter;
        NoopEvent(appLevel?: null, callType?: null, agreementSelector?: null): NoopEventEventFilter;
    };
    estimateGas: {
        actionAgreementRevert(agreement: PromiseOrValue<string>, reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionAlteringCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        actionAssert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        actionCallActionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallActionNoopThroughAux(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallActionRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallActionWithInvalidCtx(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallAgreementWithInvalidCtx(agreement: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallAgreementWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallAppActionWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionCallBadAction(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionExpectMsgSender(expectedMsgSender: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionPingAgreement(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionPingAgreementThroughAux(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionReturnEmptyCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        actionRevert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        actionRevertWithReason(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowCompositeApp(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setNextCallbackAction(actionType: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryRegisterApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        actionAgreementRevert(agreement: PromiseOrValue<string>, reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionAlteringCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionAssert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionCallActionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallActionNoopThroughAux(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallActionRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallActionWithInvalidCtx(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallAgreementWithInvalidCtx(agreement: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallAgreementWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallAppActionWithoutCtx(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionCallBadAction(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionExpectMsgSender(expectedMsgSender: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionNoop(ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionPingAgreement(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionPingAgreementThroughAux(agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionReturnEmptyCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionRevert(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        actionRevertWithReason(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowCompositeApp(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setNextCallbackAction(actionType: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryRegisterApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperAppMock.d.ts.map