import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface AgreementMockInterface extends utils.Interface {
    functions: {
        "agreementType()": FunctionFragment;
        "callAppAfterAgreementCreatedCallback(address,bytes)": FunctionFragment;
        "callAppAfterAgreementTerminatedCallback(address,bytes)": FunctionFragment;
        "callAppAfterAgreementUpdatedCallback(address,bytes)": FunctionFragment;
        "callAppBeforeAgreementCreatedCallback(address,bytes)": FunctionFragment;
        "callAppBeforeAgreementTerminatedCallback(address,bytes)": FunctionFragment;
        "callAppBeforeAgreementUpdatedCallback(address,bytes)": FunctionFragment;
        "castrate()": FunctionFragment;
        "createAgreementFor(address,bytes32,bytes32[])": FunctionFragment;
        "doRevert(string,bytes)": FunctionFragment;
        "getCodeAddress()": FunctionFragment;
        "makeLiquidationPayoutsFor(address,bytes32,bool,address,address,uint256,int256)": FunctionFragment;
        "pingMe(address,uint256,bytes)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
        "setRealtimeBalanceFor(address,address,int256,uint256,uint256)": FunctionFragment;
        "settleBalanceFor(address,address,int256)": FunctionFragment;
        "terminateAgreementFor(address,bytes32,uint256)": FunctionFragment;
        "tryAppCallbackPop(address,bytes)": FunctionFragment;
        "tryAppCallbackPush(address,address,bool,bytes)": FunctionFragment;
        "tryCallAppAfterCallback(address,address,bool,bytes)": FunctionFragment;
        "tryCallAppBeforeCallback(address,address,bool,bytes)": FunctionFragment;
        "tryCtxUseCredit(address,bool,bytes)": FunctionFragment;
        "tryJailApp(address,address,bool,bytes)": FunctionFragment;
        "updateAgreementDataFor(address,bytes32,bytes32[])": FunctionFragment;
        "updateAgreementStateSlotFor(address,address,uint256,bytes32[])": FunctionFragment;
        "updateCode(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "agreementType" | "callAppAfterAgreementCreatedCallback" | "callAppAfterAgreementTerminatedCallback" | "callAppAfterAgreementUpdatedCallback" | "callAppBeforeAgreementCreatedCallback" | "callAppBeforeAgreementTerminatedCallback" | "callAppBeforeAgreementUpdatedCallback" | "castrate" | "createAgreementFor" | "doRevert" | "getCodeAddress" | "makeLiquidationPayoutsFor" | "pingMe" | "proxiableUUID" | "realtimeBalanceOf" | "setRealtimeBalanceFor" | "settleBalanceFor" | "terminateAgreementFor" | "tryAppCallbackPop" | "tryAppCallbackPush" | "tryCallAppAfterCallback" | "tryCallAppBeforeCallback" | "tryCtxUseCredit" | "tryJailApp" | "updateAgreementDataFor" | "updateAgreementStateSlotFor" | "updateCode" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "callAppAfterAgreementCreatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppAfterAgreementTerminatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppAfterAgreementUpdatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppBeforeAgreementCreatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppBeforeAgreementTerminatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppBeforeAgreementUpdatedCallback", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "castrate", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAgreementFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "doRevert", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getCodeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "makeLiquidationPayoutsFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "pingMe", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setRealtimeBalanceFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "settleBalanceFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "terminateAgreementFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "tryAppCallbackPop", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "tryAppCallbackPush", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tryCallAppAfterCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tryCallAppBeforeCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tryCtxUseCredit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tryJailApp", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateAgreementDataFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "updateAgreementStateSlotFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "updateCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAfterAgreementCreatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAfterAgreementTerminatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAfterAgreementUpdatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppBeforeAgreementCreatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppBeforeAgreementTerminatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppBeforeAgreementUpdatedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAgreementFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "doRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeLiquidationPayoutsFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pingMe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRealtimeBalanceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleBalanceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terminateAgreementFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryAppCallbackPop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryAppCallbackPush", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryCallAppAfterCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryCallAppBeforeCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryCtxUseCredit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryJailApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementDataFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementStateSlotFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "AppAfterCallbackResult(uint8,uint8,bytes4)": EventFragment;
        "AppBeforeCallbackResult(uint8,uint8,bytes4,bytes)": EventFragment;
        "CodeUpdated(bytes32,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Pong(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AppAfterCallbackResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AppBeforeCallbackResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pong"): EventFragment;
}
export interface AppAfterCallbackResultEventObject {
    appLevel: number;
    callType: number;
    agreementSelector: string;
}
export type AppAfterCallbackResultEvent = TypedEvent<[
    number,
    number,
    string
], AppAfterCallbackResultEventObject>;
export type AppAfterCallbackResultEventFilter = TypedEventFilter<AppAfterCallbackResultEvent>;
export interface AppBeforeCallbackResultEventObject {
    appLevel: number;
    callType: number;
    agreementSelector: string;
    cbdata: string;
}
export type AppBeforeCallbackResultEvent = TypedEvent<[
    number,
    number,
    string,
    string
], AppBeforeCallbackResultEventObject>;
export type AppBeforeCallbackResultEventFilter = TypedEventFilter<AppBeforeCallbackResultEvent>;
export interface CodeUpdatedEventObject {
    uuid: string;
    codeAddress: string;
}
export type CodeUpdatedEvent = TypedEvent<[
    string,
    string
], CodeUpdatedEventObject>;
export type CodeUpdatedEventFilter = TypedEventFilter<CodeUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PongEventObject {
    ping: BigNumber;
}
export type PongEvent = TypedEvent<[BigNumber], PongEventObject>;
export type PongEventFilter = TypedEventFilter<PongEvent>;
export interface AgreementMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AgreementMockInterface;
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
        agreementType(overrides?: CallOverrides): Promise<[string]>;
        callAppAfterAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppAfterAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppAfterAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppBeforeAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppBeforeAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppBeforeAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        doRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        getCodeAddress(overrides?: CallOverrides): Promise<[string] & {
            codeAddress: string;
        }>;
        makeLiquidationPayoutsFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, useDefaultRewardAccount: PromiseOrValue<boolean>, liquidator: PromiseOrValue<string>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pingMe(expectedMsgSender: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        setRealtimeBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, dynamicBalance: PromiseOrValue<BigNumberish>, deposit: PromiseOrValue<BigNumberish>, owedDeposit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        terminateAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryAppCallbackPop(host: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryAppCallbackPush(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryCallAppAfterCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryCallAppBeforeCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryCtxUseCredit(host: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tryJailApp(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementDataFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementStateSlotFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    agreementType(overrides?: CallOverrides): Promise<string>;
    callAppAfterAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppAfterAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppAfterAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppBeforeAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppBeforeAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppBeforeAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    castrate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    doRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    getCodeAddress(overrides?: CallOverrides): Promise<string>;
    makeLiquidationPayoutsFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, useDefaultRewardAccount: PromiseOrValue<boolean>, liquidator: PromiseOrValue<string>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pingMe(expectedMsgSender: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    setRealtimeBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, dynamicBalance: PromiseOrValue<BigNumberish>, deposit: PromiseOrValue<BigNumberish>, owedDeposit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    terminateAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryAppCallbackPop(host: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryAppCallbackPush(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryCallAppAfterCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryCallAppBeforeCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryCtxUseCredit(host: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tryJailApp(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementDataFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementStateSlotFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        agreementType(overrides?: CallOverrides): Promise<string>;
        callAppAfterAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppAfterAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppAfterAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppBeforeAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppBeforeAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppBeforeAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        castrate(overrides?: CallOverrides): Promise<void>;
        createAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        doRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getCodeAddress(overrides?: CallOverrides): Promise<string>;
        makeLiquidationPayoutsFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, useDefaultRewardAccount: PromiseOrValue<boolean>, liquidator: PromiseOrValue<string>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        pingMe(expectedMsgSender: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        setRealtimeBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, dynamicBalance: PromiseOrValue<BigNumberish>, deposit: PromiseOrValue<BigNumberish>, owedDeposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        settleBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        terminateAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        tryAppCallbackPop(host: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tryAppCallbackPush(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tryCallAppAfterCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tryCallAppBeforeCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tryCtxUseCredit(host: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        tryJailApp(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateAgreementDataFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        updateAgreementStateSlotFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AppAfterCallbackResult(uint8,uint8,bytes4)"(appLevel?: null, callType?: null, agreementSelector?: null): AppAfterCallbackResultEventFilter;
        AppAfterCallbackResult(appLevel?: null, callType?: null, agreementSelector?: null): AppAfterCallbackResultEventFilter;
        "AppBeforeCallbackResult(uint8,uint8,bytes4,bytes)"(appLevel?: null, callType?: null, agreementSelector?: null, cbdata?: null): AppBeforeCallbackResultEventFilter;
        AppBeforeCallbackResult(appLevel?: null, callType?: null, agreementSelector?: null, cbdata?: null): AppBeforeCallbackResultEventFilter;
        "CodeUpdated(bytes32,address)"(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        CodeUpdated(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Pong(uint256)"(ping?: null): PongEventFilter;
        Pong(ping?: null): PongEventFilter;
    };
    estimateGas: {
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        callAppAfterAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppAfterAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppAfterAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppBeforeAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppBeforeAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppBeforeAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        doRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        makeLiquidationPayoutsFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, useDefaultRewardAccount: PromiseOrValue<boolean>, liquidator: PromiseOrValue<string>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pingMe(expectedMsgSender: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setRealtimeBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, dynamicBalance: PromiseOrValue<BigNumberish>, deposit: PromiseOrValue<BigNumberish>, owedDeposit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        terminateAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryAppCallbackPop(host: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryAppCallbackPush(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryCallAppAfterCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryCallAppBeforeCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryCtxUseCredit(host: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tryJailApp(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementDataFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementStateSlotFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callAppAfterAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppAfterAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppAfterAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppBeforeAgreementCreatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppBeforeAgreementTerminatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppBeforeAgreementUpdatedCallback(app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        doRevert(reason: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeLiquidationPayoutsFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, useDefaultRewardAccount: PromiseOrValue<boolean>, liquidator: PromiseOrValue<string>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pingMe(expectedMsgSender: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRealtimeBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, dynamicBalance: PromiseOrValue<BigNumberish>, deposit: PromiseOrValue<BigNumberish>, owedDeposit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleBalanceFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        terminateAgreementFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryAppCallbackPop(host: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryAppCallbackPush(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryCallAppAfterCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryCallAppBeforeCallback(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryCtxUseCredit(host: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tryJailApp(host: PromiseOrValue<string>, appMock: PromiseOrValue<string>, hackCtx: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementDataFor(token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementStateSlotFor(token: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AgreementMock.d.ts.map