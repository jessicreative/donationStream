import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SuperAppMockAuxInterface extends utils.Interface {
    functions: {
        "actionCallActionNoop(address,address,bytes)": FunctionFragment;
        "actionPingAgreement(address,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "actionCallActionNoop" | "actionPingAgreement"): FunctionFragment;
    encodeFunctionData(functionFragment: "actionCallActionNoop", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "actionPingAgreement", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "actionCallActionNoop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "actionPingAgreement", data: BytesLike): Result;
    events: {};
}
export interface SuperAppMockAux extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperAppMockAuxInterface;
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
        actionCallActionNoop(host: PromiseOrValue<string>, app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        actionPingAgreement(host: PromiseOrValue<string>, agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    actionCallActionNoop(host: PromiseOrValue<string>, app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    actionPingAgreement(host: PromiseOrValue<string>, agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        actionCallActionNoop(host: PromiseOrValue<string>, app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        actionPingAgreement(host: PromiseOrValue<string>, agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        actionCallActionNoop(host: PromiseOrValue<string>, app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        actionPingAgreement(host: PromiseOrValue<string>, agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        actionCallActionNoop(host: PromiseOrValue<string>, app: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        actionPingAgreement(host: PromiseOrValue<string>, agreement: PromiseOrValue<string>, ping: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperAppMockAux.d.ts.map