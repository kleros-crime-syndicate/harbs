import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Currency__factory } from "@harbs/harbs-contracts/typechain-types/factories/src/Currency__factory";

const Address = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";

export const useWrappedMatic = () => {
  const { library } = useWeb3React<Web3Provider>();
  return library ? Currency__factory.connect(Address, library.getSigner()) : undefined;
}
