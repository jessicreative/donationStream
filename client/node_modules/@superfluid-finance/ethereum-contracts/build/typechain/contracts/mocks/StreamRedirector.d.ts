import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface StreamRedirectorInterface extends utils.Interface {
    functions: {
        "CFA_ID()": FunctionFragment;
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "allowCompositeApp(address)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "cfaV1()": FunctionFragment;
        "host()": FunctionFragment;
        "receiver()": FunctionFragment;
        "startStreamToSelf(address,int96)": FunctionFragment;
        "startStreamToSuperApp(address,int96)": FunctionFragment;
        "stopStreamToSelf(address)": FunctionFragment;
        "stopStreamToSuperApp(address,address)": FunctionFragment;
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CFA_ID" | "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "allowCompositeApp" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated" | "cfaV1" | "host" | "receiver" | "startStreamToSelf" | "startStreamToSuperApp" | "stopStreamToSelf" | "stopStreamToSuperApp" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "CFA_ID", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "cfaV1", values?: undefined): string;
    encodeFunctionData(functionFragment: "host", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
    encodeFunctionData(functionFragment: "startStreamToSelf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startStreamToSuperApp", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stopStreamToSelf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stopStreamToSuperApp", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CFA_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCompositeApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cfaV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "host", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startStreamToSelf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startStreamToSuperApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopStreamToSelf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopStreamToSuperApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {};
}
export interface StreamRedirector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StreamRedirectorInterface;
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
        CFA_ID(overrides?: CallOverrides): Promise<[string]>;
        afterAgreementCreated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowCompositeApp(_targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
            host: string;
            cfa: string;
        }>;
        host(overrides?: CallOverrides): Promise<[string]>;
        receiver(overrides?: CallOverrides): Promise<[string]>;
        startStreamToSelf(_originAccount: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startStreamToSuperApp(_superApp: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopStreamToSelf(_originAccount: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopStreamToSuperApp(_sender: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    CFA_ID(overrides?: CallOverrides): Promise<string>;
    afterAgreementCreated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowCompositeApp(_targetApp: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
        host: string;
        cfa: string;
    }>;
    host(overrides?: CallOverrides): Promise<string>;
    receiver(overrides?: CallOverrides): Promise<string>;
    startStreamToSelf(_originAccount: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startStreamToSuperApp(_superApp: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopStreamToSelf(_originAccount: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopStreamToSuperApp(_sender: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        CFA_ID(overrides?: CallOverrides): Promise<string>;
        afterAgreementCreated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        allowCompositeApp(_targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        cfaV1(overrides?: CallOverrides): Promise<[string, string] & {
            host: string;
            cfa: string;
        }>;
        host(overrides?: CallOverrides): Promise<string>;
        receiver(overrides?: CallOverrides): Promise<string>;
        startStreamToSelf(_originAccount: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startStreamToSuperApp(_superApp: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stopStreamToSelf(_originAccount: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stopStreamToSuperApp(_sender: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        CFA_ID(overrides?: CallOverrides): Promise<BigNumber>;
        afterAgreementCreated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowCompositeApp(_targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        cfaV1(overrides?: CallOverrides): Promise<BigNumber>;
        host(overrides?: CallOverrides): Promise<BigNumber>;
        receiver(overrides?: CallOverrides): Promise<BigNumber>;
        startStreamToSelf(_originAccount: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startStreamToSuperApp(_superApp: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopStreamToSelf(_originAccount: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopStreamToSuperApp(_sender: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CFA_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        afterAgreementCreated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(_superToken: PromiseOrValue<string>, _agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, _ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowCompositeApp(_targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cfaV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        host(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startStreamToSelf(_originAccount: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startStreamToSuperApp(_superApp: PromiseOrValue<string>, _flowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopStreamToSelf(_originAccount: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopStreamToSuperApp(_sender: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=StreamRedirector.d.ts.map