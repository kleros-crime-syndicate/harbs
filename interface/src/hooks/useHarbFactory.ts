import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { HarbergerAdsFactory__factory } from "@harbs/harbs-contracts/typechain-types/factories/src/HarbergerAdsFactory__factory";
import { address } from "@harbs/harbs-contracts/deployments/mumbai/HarbergerAdsFactory.json";

export const useHarbFactory = () => {
  const { library } = useWeb3React<Web3Provider>();
  return library ? HarbergerAdsFactory__factory.connect(address, library) : undefined;
}
