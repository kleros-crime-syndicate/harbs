import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { HarbergerAds__factory } from "@harbs/harbs-contracts/typechain-types/factories/src/HarbergerAds__factory";

export const useHarbFactory = (address: string) => {
  const { library } = useWeb3React<Web3Provider>();
  return library ? HarbergerAds__factory.connect(address, library) : undefined;
}
