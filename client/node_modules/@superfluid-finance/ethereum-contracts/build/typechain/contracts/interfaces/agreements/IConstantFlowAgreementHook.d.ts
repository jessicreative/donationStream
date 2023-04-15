import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IConstantFlowAgreementHook {
    type CFAHookParamsStruct = {
        sender: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        flowOperator: PromiseOrValue<string>;
        flowRate: PromiseOrValue<BigNumberish>;
    };
    type CFAHookParamsStructOutput = [
        string,
        string,
        string,
        BigNumber
    ] & {
        sender: string;
        receiver: string;
        flowOperator: string;
        flowRate: BigNumber;
    };
}
export interface IConstantFlowAgreementHookInterface extends utils.Interface {
    functions: {
        "onCreate(address,(address,address,address,int96))": FunctionFragment;
        "onDelete(address,(address,address,address,int96),int96)": FunctionFragment;
        "onUpdate(address,(address,address,address,int96),int96)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "onCreate" | "onDelete" | "onUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "onCreate", values: [
        PromiseOrValue<string>,
        IConstantFlowAgreementHook.CFAHookParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "onDelete", values: [
        PromiseOrValue<string>,
        IConstantFlowAgreementHook.CFAHookParamsStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "onUpdate", values: [
        PromiseOrValue<string>,
        IConstantFlowAgreementHook.CFAHookParamsStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "onCreate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onDelete", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onUpdate", data: BytesLike): Result;
    events: {};
}
export interface IConstantFlowAgreementHook extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConstantFlowAgreementHookInterface;
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
        onCreate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onDelete(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onUpdate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    onCreate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onDelete(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onUpdate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        onCreate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, overrides?: CallOverrides): Promise<boolean>;
        onDelete(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        onUpdate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        onCreate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onDelete(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onUpdate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onCreate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onDelete(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onUpdate(token: PromiseOrValue<string>, newFlowData: IConstantFlowAgreementHook.CFAHookParamsStruct, oldFlowRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IConstantFlowAgreementHook.d.ts.map