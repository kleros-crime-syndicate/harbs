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
    name: "CollectionCreated",
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
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612689806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634cc2ad8e14610030575b600080fd5b61004361003e366004610187565b610045565b005b60008b8b8b8b8b8b8b8b8b8b8b60405161005e90610115565b6100729b9a9998979695949392919061028f565b604051809103906000f08015801561008e573d6000803e3d6000fd5b5090507f474df8b2df399ae66b461e124d7b64cda0dc3b3a27de0a9068d6c46e1a962e71818d8d8d8d8d6040516100ff969594939291906001600160a01b0396871681526020810195909552604085019390935260608401919091528316608083015290911660a082015260c00190565b60405180910390a1505050505050505050505050565b6123468061030e83390190565b80356001600160a01b038116811461013957600080fd5b919050565b60008083601f84011261015057600080fd5b50813567ffffffffffffffff81111561016857600080fd5b60208301915083602082850101111561018057600080fd5b9250929050565b60008060008060008060008060008060006101008c8e0312156101a957600080fd5b8b359a5060208c0135995060408c013598506101c760608d01610122565b97506101d560808d01610122565b965067ffffffffffffffff8060a08e013511156101f157600080fd5b6102018e60a08f01358f0161013e565b909750955060c08d013581101561021757600080fd5b6102278e60c08f01358f0161013e565b909550935060e08d013581101561023d57600080fd5b5061024e8d60e08e01358e0161013e565b81935080925050509295989b509295989b9093969950565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8b8152602081018b9052604081018a90526001600160a01b0389811660608301528816608082015261010060a082018190526000906102d1838201898b610266565b905082810360c08401526102e6818789610266565b905082810360e08401526102fb818587610266565b9e9d505050505050505050505050505056fe6101206040523480156200001257600080fd5b506040516200234638038062002346833981016040819052620000359162000238565b60c088905260808790526001600160a01b0380861660e05260a087905284166101005280516200006d906002906020840190620000a8565b50815162000083906003906020850190620000a8565b50825162000099906003906020860190620000a8565b5050505050505050506200034a565b828054620000b6906200030d565b90600052602060002090601f016020900481019282620000da576000855562000125565b82601f10620000f557805160ff191683800117855562000125565b8280016001018555821562000125579182015b828111156200012557825182559160200191906001019062000108565b506200013392915062000137565b5090565b5b8082111562000133576000815560010162000138565b80516001600160a01b03811681146200016657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200019357600080fd5b81516001600160401b0380821115620001b057620001b06200016b565b604051601f8301601f19908116603f01168101908282118183101715620001db57620001db6200016b565b81604052838152602092508683858801011115620001f857600080fd5b600091505b838210156200021c5785820183015181830184015290820190620001fd565b838211156200022e5760008385830101525b9695505050505050565b600080600080600080600080610100898b0312156200025657600080fd5b8851975060208901519650604089015195506200027660608a016200014e565b94506200028660808a016200014e565b60a08a01519094506001600160401b0380821115620002a457600080fd5b620002b28c838d0162000181565b945060c08b0151915080821115620002c957600080fd5b620002d78c838d0162000181565b935060e08b0151915080821115620002ee57600080fd5b50620002fd8b828c0162000181565b9150509295985092959890939650565b600181811c908216806200032257607f821691505b602082108114156200034457634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051611ed76200046f6000396000818161040a015281816106d9015281816108a801528181610d030152818161134a015281816115650152818161180201526119190152600081816104db015281816106aa015281816107db01528181610866015281816109b701528181610c3601528181610cd601528181610f6201528181611196015281816112740152818161131d015281816115380152611831015260008181610439015281816105c701528181610b5601528181610da501528181610e4b01528181610eff01528181611052015281816113ec015281816114ba015281816115ad01526116ff01526000818161022801528181610a8101526116a10152600081816103d00152610eaf0152611ed76000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806370a082311161010f578063b88d4fde116100a2578063cf264e9a11610071578063cf264e9a146104c3578063e5a6b10f146104d6578063e6d28063146104fd578063e985e9c51461051057600080fd5b8063b88d4fde1461047c578063c397ae391461048a578063c87b56dd1461049d578063ce3f865f146104b057600080fd5b806395d89b41116100de57806395d89b411461042c5780639c89dcf314610434578063a22cb4651461045b578063a65e2cfd1461046957600080fd5b806370a08231146103b7578063771a3a1d146103cb5780638a784c4a146103f2578063913e77ad1461040557600080fd5b806320c5429b1161018757806342842e0e1161015657806342842e0e146103475780635a8b754d1461038857806362043bd81461039b5780636352211e146103a457600080fd5b806320c5429b1461033457806323b872dd1461034757806327e235e314610355578063379664041461037557600080fd5b8063081812fc116101c3578063081812fc1461026d578063095ea7b31461029857806311a7a4c0146102a85780631281311d1461032157600080fd5b806301ffc9a7146101ea57806304646a491461022357806306fdde0314610258575b600080fd5b61020e6101f83660046119f5565b6001600160e01b03191663861c59cd60e01b1490565b60405190151581526020015b60405180910390f35b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161021a565b61026061051e565b60405161021a9190611a1f565b61028061027b366004611a74565b6105b0565b6040516001600160a01b03909116815260200161021a565b6102a66101e5366004611aa9565b005b6102ef6102b6366004611a74565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919085565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a00161021a565b6102a661032f366004611ad3565b6105b7565b6102a6610342366004611a74565b610b54565b6102a66101e5366004611b05565b61024a610363366004611b41565b60016020526000908152604090205481565b61024a610383366004611a74565b610da1565b61024a610396366004611a74565b610e25565b61024a61271081565b6102806103b2366004611a74565b610e47565b61024a6103c5366004611b41565b50600090565b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b61024a610400366004611a74565b610ea4565b6102807f000000000000000000000000000000000000000000000000000000000000000081565b610260610eee565b61024a7f000000000000000000000000000000000000000000000000000000000000000081565b6102a66101e5366004611b6d565b6102a6610477366004611ba4565b610efd565b6102a66101e5366004611c0f565b6102a6610498366004611ba4565b611050565b6102606104ab366004611a74565b6113e8565b6102a66104be366004611a74565b6114b8565b6102a66104d1366004611ba4565b6115ab565b6102807f000000000000000000000000000000000000000000000000000000000000000081565b6102a661050b366004611c7e565b6116fd565b61020e61027b366004611cca565b60606004805461052d90611cfd565b80601f016020809104026020016040519081016040528092919081815260200182805461055990611cfd565b80156105a65780601f1061057b576101008083540402835291602001916105a6565b820191906000526020600020905b81548152906001019060200180831161058957829003601f168201915b5050505050905090565b6000806000fd5b60008481526020819052604090207f0000000000000000000000000000000000000000000000000000000000000000851061060d5760405162461bcd60e51b815260040161060490611d38565b60405180910390fd5b80546001600160a01b031633141561065f5760405162461bcd60e51b815260206004820152601560248201527410d85b89dd08189d5e481e5bdd5c881bdddb881859605a1b6044820152606401610604565b600061066a86610da1565b825460028401549192506001600160a01b03169082111561075b576106938784600201546117dc565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906107039033907f0000000000000000000000000000000000000000000000000000000000000000908b90600401611d5e565b602060405180830381600087803b15801561071d57600080fd5b505af1158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190611d82565b50610955565b858360010154111561079f5760405162461bcd60e51b815260206004820152600d60248201526c2637bbb130b6361037b33332b960991b6044820152606401610604565b6107ad8784600201546117dc565b8254600284015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561082157600080fd5b505af1158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190611d82565b5082546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916323b872dd91339116156108a65785546001600160a01b03166108c8565b7f00000000000000000000000000000000000000000000000000000000000000005b896040518463ffffffff1660e01b81526004016108e793929190611d5e565b602060405180830381600087803b15801561090157600080fd5b505af1158015610915573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109399190611d82565b6109555760405162461bcd60e51b815260040161060490611d9f565b61095e85610e25565b8410156109a05760405162461bcd60e51b815260206004820152601060248201526f4e6f7420656e6f7567682066756e647360801b6044820152606401610604565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906109f090339030908990600401611d5e565b602060405180830381600087803b158015610a0a57600080fd5b505af1158015610a1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a429190611d82565b610a5e5760405162461bcd60e51b815260040161060490611d9f565b82546001600160a01b031916331783556002830184905560018301859055610aa67f000000000000000000000000000000000000000000000000000000000000000042611ddb565b6004840155426003840155604051879033906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90600090a4867fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c886604051610b1b91815260200190565b60405180910390a286600080516020611e8283398151915285604051610b4391815260200190565b60405180910390a250505050505050565b7f00000000000000000000000000000000000000000000000000000000000000008110610b935760405162461bcd60e51b815260040161060490611d38565b600081815260208190526040902080546001600160a01b03163314610be65760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b6044820152606401610604565b6000610bf183610da1565b905081600201548111610cba57610c0883826117dc565b8154600283015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b158015610c7c57600080fd5b505af1158015610c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb49190611d82565b50610d93565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610d3f917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b602060405180830381600087803b158015610d5957600080fd5b505af1158015610d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d919190611d82565b505b610d9c836118ff565b505050565b60007f00000000000000000000000000000000000000000000000000000000000000008210610de25760405162461bcd60e51b815260040161060490611d38565b60008281526020819052604081206001810154909190610e0190610ea4565b9050816003015442610e139190611df3565b610e1d9082611e0a565b949350505050565b600080610e3183610ea4565b9050610e4081622819a0611e0a565b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000008210610e885760405162461bcd60e51b815260040161060490611d38565b506000908152602081905260409020546001600160a01b031690565b600080612710610ed47f000000000000000000000000000000000000000000000000000000000000000085611e0a565b610ede9190611e29565b9050610e406301e1338082611e29565b60606003805461052d90611cfd565b7f00000000000000000000000000000000000000000000000000000000000000008210610f3c5760405162461bcd60e51b815260040161060490611d38565b6000828152602081905260409081902090516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90610f9b90339030908790600401611d5e565b602060405180830381600087803b158015610fb557600080fd5b505af1158015610fc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fed9190611d82565b6110095760405162461bcd60e51b815260040161060490611d9f565b8181600201600082825461101d9190611ddb565b909155505060028101546040519081528390600080516020611e82833981519152906020015b60405180910390a2505050565b7f0000000000000000000000000000000000000000000000000000000000000000821061108f5760405162461bcd60e51b815260040161060490611d38565b600082815260208190526040902080546001600160a01b031633146110e25760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b6044820152606401610604565b80600401544210156111275760405162461bcd60e51b815260206004820152600e60248201526d57616974206d6f72652074696d6560901b6044820152606401610604565b600061113284610da1565b9050816002015481116113015761114984826117dc565b816002015483101561124657828260020160008282546111699190611df3565b9091555050815460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018590527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b1580156111dc57600080fd5b505af11580156111f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112149190611d82565b5083600080516020611e82833981519152836002015460405161123991815260200190565b60405180910390a26113e2565b8154600283015460405163a9059cbb60e01b81526001600160a01b03928316600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b1580156112ba57600080fd5b505af11580156112ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f29190611d82565b506112fc846118ff565b6113e2565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91611386917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b602060405180830381600087803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d89190611d82565b506113e2846118ff565b50505050565b60607f00000000000000000000000000000000000000000000000000000000000000008210156114a4576002805461141f90611cfd565b80601f016020809104026020016040519081016040528092919081815260200182805461144b90611cfd565b80156114985780601f1061146d57610100808354040283529160200191611498565b820191906000526020600020905b81548152906001019060200180831161147b57829003601f168201915b50505050509050919050565b505060408051602081019091526000815290565b7f000000000000000000000000000000000000000000000000000000000000000081106114f75760405162461bcd60e51b815260040161060490611d38565b60008181526020819052604081209061150f83610da1565b9050816002015481106115a157600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610d3f917f0000000000000000000000000000000000000000000000000000000000000000916004016001600160a01b03929092168252602082015260400190565b610d9c83826117dc565b7f000000000000000000000000000000000000000000000000000000000000000082106115ea5760405162461bcd60e51b815260040161060490611d38565b600082815260208190526040902080546001600160a01b0316331461163e5760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b6044820152606401610604565b81816001015411156116955780600401544210156116955760405162461bcd60e51b8152602060048201526014602482015273546f6f20736f6f6e20746f20646563726561736560601b6044820152606401610604565b600181018290556116c67f000000000000000000000000000000000000000000000000000000000000000042611ddb565b600482015560405182815283907fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c890602001611043565b7f0000000000000000000000000000000000000000000000000000000000000000831061173c5760405162461bcd60e51b815260040161060490611d38565b600083815260208190526040902080546001600160a01b0316331461179b5760405162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c8818da185b99d95cc81859605a1b6044820152606401610604565b7fae0663072bcb7f24f009e8ad0e7bd01cb00a189760d428d8ff269525830db4078484846040516117ce93929190611e4b565b60405180910390a150505050565b60008281526020819052604090819020905163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561187557600080fd5b505af1158015611889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ad9190611d82565b50818160020160008282546118c29190611df3565b909155505042600382015560405182815283907f65c3c2ca9c0a91fa382799173e8eaba4f2d15dc17f9d7b3194a673f5311ccdaa90602001611043565b6000818152602081815260408083208054600282018590557f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081166001600160a01b03198316178355600183018690559251948552909391169184917fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c8910160405180910390a282600080516020611e8283398151915260006040516119b091815260200190565b60405180910390a260405183906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505050565b600060208284031215611a0757600080fd5b81356001600160e01b031981168114610e4057600080fd5b600060208083528351808285015260005b81811015611a4c57858101830151858201604001528201611a30565b81811115611a5e576000604083870101525b50601f01601f1916929092016040019392505050565b600060208284031215611a8657600080fd5b5035919050565b80356001600160a01b0381168114611aa457600080fd5b919050565b60008060408385031215611abc57600080fd5b611ac583611a8d565b946020939093013593505050565b60008060008060808587031215611ae957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600060608486031215611b1a57600080fd5b611b2384611a8d565b9250611b3160208501611a8d565b9150604084013590509250925092565b600060208284031215611b5357600080fd5b610e4082611a8d565b8015158114611b6a57600080fd5b50565b60008060408385031215611b8057600080fd5b611b8983611a8d565b91506020830135611b9981611b5c565b809150509250929050565b60008060408385031215611bb757600080fd5b50508035926020909101359150565b60008083601f840112611bd857600080fd5b50813567ffffffffffffffff811115611bf057600080fd5b602083019150836020828501011115611c0857600080fd5b9250929050565b600080600080600060808688031215611c2757600080fd5b611c3086611a8d565b9450611c3e60208701611a8d565b935060408601359250606086013567ffffffffffffffff811115611c6157600080fd5b611c6d88828901611bc6565b969995985093965092949392505050565b600080600060408486031215611c9357600080fd5b83359250602084013567ffffffffffffffff811115611cb157600080fd5b611cbd86828701611bc6565b9497909650939450505050565b60008060408385031215611cdd57600080fd5b611ce683611a8d565b9150611cf460208401611a8d565b90509250929050565b600181811c90821680611d1157607f821691505b60208210811415611d3257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b4e6f74206578697374696e6760a01b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060208284031215611d9457600080fd5b8151610e4081611b5c565b6020808252600c908201526b2130b2103a3930b739b332b960a11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611dee57611dee611dc5565b500190565b600082821015611e0557611e05611dc5565b500390565b6000816000190483118215151615611e2457611e24611dc5565b500290565b600082611e4657634e487b7160e01b600052601260045260246000fd5b500490565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fee2c574ac6f15605f6ea5c165e0fa6af366d8f1ee6203f57dd2d3e8c82ce27aa7a2646970667358221220ee3e02ae606cf28ef7cc9efed9d8bce7ac587a3ae9591928e1fcbeebf958a2ff64736f6c63430008090033a264697066735822122063084408b174bd264fa11f58e0092a4544b597a6b7ac3e0003c0345e8dd9f6f964736f6c63430008090033";

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
