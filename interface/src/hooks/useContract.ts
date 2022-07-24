import { useWeb3React } from "@web3-react/core";
import { JsonRpcProvider, JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { isAddress } from "utils/address";
import { useMemo } from "react";

import HarbergerAdsJson from "@harbs/harbs-contracts/deployments/mumbai/HarbergerAds.json";
import HarbergerAdsFactoryJson from "@harbs/harbs-contracts/deployments/mumbai/HarbergerAdsFactory.json";

import { HarbergerAds, HarbergerAdsFactory } from "generated/contracts";
import { Currency__factory } from "@harbs/harbs-contracts/typechain-types/factories/src/Currency__factory";

export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useWeb3React<JsonRpcProvider>();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T;
}

function getSigner(provider: JsonRpcProvider, account: string): JsonRpcSigner {
  return provider.getSigner(account).connectUnchecked();
}

function getProviderOrSigner(provider: JsonRpcProvider, account?: string): JsonRpcProvider | JsonRpcSigner {
  return account ? getSigner(provider, account) : provider;
}

export function getContract(address: string, ABI: any, provider: JsonRpcProvider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(provider, account));
}

export const useHarbergerAds = (address?: string) => useContract<HarbergerAds>(address, HarbergerAdsJson.abi);

export const useFactory = () =>
  useContract<HarbergerAdsFactory>("0xc89312e08c792445b87714a3938be0b43d0d929a", HarbergerAdsFactoryJson.abi);

export const useWMatic = () => {
  const { library } = useWeb3React<Web3Provider>();
  return library ? Currency__factory.connect("0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", library.getSigner()) : undefined;
}

// export const useERC20 = (address?: string) => useContract(address, ERC20.abi);
