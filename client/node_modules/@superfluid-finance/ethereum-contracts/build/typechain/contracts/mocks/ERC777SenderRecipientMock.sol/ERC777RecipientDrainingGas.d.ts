import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ERC777RecipientDrainingGasInterface extends utils.Interface {
    functions: {
        "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "canImplementInterfaceForAddress" | "tokensReceived"): FunctionFragment;
    encodeFunctionData(functionFragment: "canImplementInterfaceForAddress", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "canImplementInterfaceForAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    events: {
        "DrainedGas(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DrainedGas"): EventFragment;
}
export interface DrainedGasEventObject {
    allowance: BigNumber;
    burned: BigNumber;
}
export type DrainedGasEvent = TypedEvent<[
    BigNumber,
    BigNumber
], DrainedGasEventObject>;
export type DrainedGasEventFilter = TypedEventFilter<DrainedGasEvent>;
export interface ERC777RecipientDrainingGas extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC777RecipientDrainingGasInterface;
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
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DrainedGas(uint256,uint256)"(allowance?: null, burned?: null): DrainedGasEventFilter;
        DrainedGas(allowance?: null, burned?: null): DrainedGasEventFilter;
    };
    estimateGas: {
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC777RecipientDrainingGas.d.ts.map