import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConstantFlowAgreementHook, IConstantFlowAgreementHookInterface } from "../../../../contracts/interfaces/agreements/IConstantFlowAgreementHook";
export declare class IConstantFlowAgreementHook__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "flowOperator";
                readonly type: "address";
            }, {
                readonly internalType: "int96";
                readonly name: "flowRate";
                readonly type: "int96";
            }];
            readonly internalType: "struct IConstantFlowAgreementHook.CFAHookParams";
            readonly name: "newFlowData";
            readonly type: "tuple";
        }];
        readonly name: "onCreate";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "flowOperator";
                readonly type: "address";
            }, {
                readonly internalType: "int96";
                readonly name: "flowRate";
                readonly type: "int96";
            }];
            readonly internalType: "struct IConstantFlowAgreementHook.CFAHookParams";
            readonly name: "newFlowData";
            readonly type: "tuple";
        }, {
            readonly internalType: "int96";
            readonly name: "oldFlowRate";
            readonly type: "int96";
        }];
        readonly name: "onDelete";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "flowOperator";
                readonly type: "address";
            }, {
                readonly internalType: "int96";
                readonly name: "flowRate";
                readonly type: "int96";
            }];
            readonly internalType: "struct IConstantFlowAgreementHook.CFAHookParams";
            readonly name: "newFlowData";
            readonly type: "tuple";
        }, {
            readonly internalType: "int96";
            readonly name: "oldFlowRate";
            readonly type: "int96";
        }];
        readonly name: "onUpdate";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IConstantFlowAgreementHookInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConstantFlowAgreementHook;
}
//# sourceMappingURL=IConstantFlowAgreementHook__factory.d.ts.map