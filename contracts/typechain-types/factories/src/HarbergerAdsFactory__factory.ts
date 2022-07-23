/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  HarbergerAdsFactory,
  HarbergerAdsFactoryInterface,
} from "../../src/HarbergerAdsFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract HarbergerAds",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_adCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "_currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_collector",
        type: "address",
      },
    ],
    name: "HarbergerAdsCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_adCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collector",
        type: "address",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d96806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063355421a814610030575b600080fd5b61004361003e366004610133565b610045565b005b600085858585856040516100589061010e565b948552602085019390935260408401919091526001600160a01b03908116606084015216608082015260a001604051809103906000f0801580156100a0573d6000803e3d6000fd5b50604080516001600160a01b038084168252602082018a905291810188905260608101879052818616608082015290841660a08201529091507fe8bed8e13f59f7f245694a435bd655e0639ace2d7640827ace7b2c558b3c9b1d9060c00160405180910390a1505050505050565b611bd78061018a83390190565b6001600160a01b038116811461013057600080fd5b50565b600080600080600060a0868803121561014b57600080fd5b853594506020860135935060408601359250606086013561016b8161011b565b9150608086013561017b8161011b565b80915050929550929590935056fe6101206040523480156200001257600080fd5b5060405162001bd738038062001bd7833981016040819052620000359162000076565b60c0949094526080929092526001600160a01b0391821660e05260a0521661010052620000d2565b6001600160a01b03811681146200007357600080fd5b50565b600080600080600060a086880312156200008f57600080fd5b8551945060208601519350604086015192506060860151620000b1816200005d565b6080870151909250620000c4816200005d565b809150509295509295909350565b60805160a05160c05160e051610100516119ee620001e9600039600081816103d4015281816105960152818161076501528181610b25015281816111080152818161125301526114c301526000818161048a0152818161056701528181610698015281816107230152818161087401528181610a5801528181610af801528181610d7501528181610f8001528181611032015281816110db0152818161122601526114f20152600081816103fb015281816104d60152818161097801528181610bc701528181610c6d01528181610d1201528181610e3c015281816111a80152818161129b01526113c00152600081816102070152818161093e015261138f01526000818161039a0152610cd101526119ee6000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063b88d4fde11610097578063cf264e9a11610071578063cf264e9a14610472578063e5a6b10f14610485578063e6d28063146104ac578063e985e9c5146104bf57600080fd5b8063b88d4fde1461043e578063c397ae391461044c578063ce3f865f1461045f57600080fd5b8063913e77ad116100d3578063913e77ad146103cf5780639c89dcf3146103f6578063a22cb4651461041d578063a65e2cfd1461042b57600080fd5b806370a0823114610381578063771a3a1d146103955780638a784c4a146103bc57600080fd5b806323b872dd1161016657806342842e0e1161014057806342842e0e146103115780635a8b754d1461035257806362043bd8146103655780636352211e1461036e57600080fd5b806323b872dd1461031157806327e235e31461031f578063379664041461033f57600080fd5b8063095ea7b3116101a2578063095ea7b31461026257806311a7a4c0146102725780631281311d146102eb57806320c5429b146102fe57600080fd5b806301ffc9a7146101c957806304646a4914610202578063081812fc14610237575b600080fd5b6101ed6101d73660046115bc565b6001600160e01b03191663861c59cd60e01b1490565b60405190151581526020015b60405180910390f35b6102297f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016101f9565b61024a6102453660046115e6565b6104cd565b6040516001600160a01b0390911681526020016101f9565b6102706101c436600461161b565b005b6102b96102803660046115e6565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919085565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a0016101f9565b6102706102f9366004611645565b6104d4565b61027061030c3660046115e6565b610976565b6102706101c4366004611677565b61022961032d3660046116b3565b60016020526000908152604090205481565b61022961034d3660046115e6565b610bc3565b6102296103603660046115e6565b610c47565b61022961271081565b61024a61037c3660046115e6565b610c69565b61022961038f3660046116b3565b50600090565b6102297f000000000000000000000000000000000000000000000000000000000000000081565b6102296103ca3660046115e6565b610cc6565b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b6102297f000000000000000000000000000000000000000000000000000000000000000081565b6102706101c43660046116df565b610270610439366004611716565b610d10565b6102706101c4366004611781565b61027061045a366004611716565b610e3a565b61027061046d3660046115e6565b6111a6565b610270610480366004611716565b611299565b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b6102706104ba3660046117f0565b6113be565b6101ed61024536600461183c565b6000806000fd5b7f0000000000000000000000000000000000000000000000000000000000000000841061051c5760405162461bcd60e51b81526004016105139061186f565b60405180910390fd5b60008481526020819052604081209061053486610bc3565b905081600201548111156106185761055086836002015461149d565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906105c09033907f0000000000000000000000000000000000000000000000000000000000000000908a90600401611895565b602060405180830381600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061291906118b9565b50610812565b848260010154111561065c5760405162461bcd60e51b815260206004820152600d60248201526c2637bbb130b6361037b33332b960991b6044820152606401610513565b61066a86836002015461149d565b8154600283015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071691906118b9565b5081546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916323b872dd91339116156107635784546001600160a01b0316610785565b7f00000000000000000000000000000000000000000000000000000000000000005b886040518463ffffffff1660e01b81526004016107a493929190611895565b602060405180830381600087803b1580156107be57600080fd5b505af11580156107d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f691906118b9565b6108125760405162461bcd60e51b8152600401610513906118d6565b61081b84610c47565b83101561085d5760405162461bcd60e51b815260206004820152601060248201526f4e6f7420656e6f7567682066756e647360801b6044820152606401610513565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906108ad90339030908890600401611895565b602060405180830381600087803b1580156108c757600080fd5b505af11580156108db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ff91906118b9565b61091b5760405162461bcd60e51b8152600401610513906118d6565b81546001600160a01b0319163317825560028201839055600182018490556109637f000000000000000000000000000000000000000000000000000000000000000042611912565b6004830155504260039091015550505050565b7f000000000000000000000000000000000000000000000000000000000000000081106109b55760405162461bcd60e51b81526004016105139061186f565b600081815260208190526040902080546001600160a01b03163314610a085760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b6044820152606401610513565b6000610a1383610bc3565b905081600201548111610adc57610a2a838261149d565b8154600283015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b158015610a9e57600080fd5b505af1158015610ab2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad691906118b9565b50610bb5565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610b61917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610b7b57600080fd5b505af1158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb391906118b9565b505b610bbe83611593565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000008210610c045760405162461bcd60e51b81526004016105139061186f565b60008281526020819052604081206001810154909190610c2390610cc6565b9050816003015442610c35919061192a565b610c3f9082611941565b949350505050565b600080610c5383610cc6565b9050610c6281622819a0611941565b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000008210610caa5760405162461bcd60e51b81526004016105139061186f565b506000908152602081905260409020546001600160a01b031690565b600080612710610cf67f000000000000000000000000000000000000000000000000000000000000000085611941565b610d009190611960565b9050610c626301e1338082611960565b7f00000000000000000000000000000000000000000000000000000000000000008210610d4f5760405162461bcd60e51b81526004016105139061186f565b6000828152602081905260409081902090516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90610dae90339030908790600401611895565b602060405180830381600087803b158015610dc857600080fd5b505af1158015610ddc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0091906118b9565b610e1c5760405162461bcd60e51b8152600401610513906118d6565b81816002016000828254610e309190611912565b9091555050505050565b7f00000000000000000000000000000000000000000000000000000000000000008210610e795760405162461bcd60e51b81526004016105139061186f565b600082815260208190526040902080546001600160a01b03163314610ecc5760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b6044820152606401610513565b8060040154421015610f115760405162461bcd60e51b815260206004820152600e60248201526d57616974206d6f72652074696d6560901b6044820152606401610513565b6000610f1c84610bc3565b9050816002015481116110bf57610f33848261149d565b81600201548310156110045782826002016000828254610f53919061192a565b9091555050815460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b158015610fc657600080fd5b505af1158015610fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffe91906118b9565b506111a0565b8154600283015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561107857600080fd5b505af115801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b091906118b9565b506110ba84611593565b6111a0565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91611144917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b602060405180830381600087803b15801561115e57600080fd5b505af1158015611172573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119691906118b9565b506111a084611593565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081106111e55760405162461bcd60e51b81526004016105139061186f565b6000818152602081905260408120906111fd83610bc3565b90508160020154811061128f57600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610b61917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b610bbe838261149d565b7f000000000000000000000000000000000000000000000000000000000000000082106112d85760405162461bcd60e51b81526004016105139061186f565b600082815260208190526040902080546001600160a01b0316331461132c5760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b6044820152606401610513565b81816001015411156113835780600401544210156113835760405162461bcd60e51b8152602060048201526014602482015273546f6f20736f6f6e20746f20646563726561736560601b6044820152606401610513565b600181018290556113b47f000000000000000000000000000000000000000000000000000000000000000042611912565b6004909101555050565b7f000000000000000000000000000000000000000000000000000000000000000083106113fd5760405162461bcd60e51b81526004016105139061186f565b600083815260208190526040902080546001600160a01b0316331461145c5760405162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c8818da185b99d95cc81859605a1b6044820152606401610513565b7fae0663072bcb7f24f009e8ad0e7bd01cb00a189760d428d8ff269525830db40784848460405161148f93929190611982565b60405180910390a150505050565b60008281526020819052604090819020905163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561153657600080fd5b505af115801561154a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156e91906118b9565b5081816002016000828254611583919061192a565b9091555050426003909101555050565b60009081526020819052604081206002810182905580546001600160a01b031916815560010155565b6000602082840312156115ce57600080fd5b81356001600160e01b031981168114610c6257600080fd5b6000602082840312156115f857600080fd5b5035919050565b80356001600160a01b038116811461161657600080fd5b919050565b6000806040838503121561162e57600080fd5b611637836115ff565b946020939093013593505050565b6000806000806080858703121561165b57600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561168c57600080fd5b611695846115ff565b92506116a3602085016115ff565b9150604084013590509250925092565b6000602082840312156116c557600080fd5b610c62826115ff565b80151581146116dc57600080fd5b50565b600080604083850312156116f257600080fd5b6116fb836115ff565b9150602083013561170b816116ce565b809150509250929050565b6000806040838503121561172957600080fd5b50508035926020909101359150565b60008083601f84011261174a57600080fd5b50813567ffffffffffffffff81111561176257600080fd5b60208301915083602082850101111561177a57600080fd5b9250929050565b60008060008060006080868803121561179957600080fd5b6117a2866115ff565b94506117b0602087016115ff565b935060408601359250606086013567ffffffffffffffff8111156117d357600080fd5b6117df88828901611738565b969995985093965092949392505050565b60008060006040848603121561180557600080fd5b83359250602084013567ffffffffffffffff81111561182357600080fd5b61182f86828701611738565b9497909650939450505050565b6000806040838503121561184f57600080fd5b611858836115ff565b9150611866602084016115ff565b90509250929050565b6020808252600c908201526b4e6f74206578697374696e6760a01b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156118cb57600080fd5b8151610c62816116ce565b6020808252600c908201526b2130b2103a3930b739b332b960a11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611925576119256118fc565b500190565b60008282101561193c5761193c6118fc565b500390565b600081600019048311821515161561195b5761195b6118fc565b500290565b60008261197d57634e487b7160e01b600052601260045260246000fd5b500490565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fea26469706673582212200e45053cbbd942f7fd4b5ccd154907aa0e20032487c024971368fa31388433be64736f6c63430008090033a264697066735822122067cf01c4c0cd1617545a893c7a8f10aa4dfe80fde661daf8010627c915c3018e64736f6c63430008090033";

type HarbergerAdsFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HarbergerAdsFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HarbergerAdsFactory__factory extends ContractFactory {
  constructor(...args: HarbergerAdsFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HarbergerAdsFactory> {
    return super.deploy(overrides || {}) as Promise<HarbergerAdsFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HarbergerAdsFactory {
    return super.attach(address) as HarbergerAdsFactory;
  }
  override connect(signer: Signer): HarbergerAdsFactory__factory {
    return super.connect(signer) as HarbergerAdsFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HarbergerAdsFactoryInterface {
    return new utils.Interface(_abi) as HarbergerAdsFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HarbergerAdsFactory {
    return new Contract(address, _abi, signerOrProvider) as HarbergerAdsFactory;
  }
}
