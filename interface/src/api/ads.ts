import { AdsQuery } from "generated/graphql";
import useWeb3 from "hooks/useWeb3";
import { useEffect, useState } from "react";
import { queryGraph } from ".";

type Ads = AdsQuery["ads"];

export const useAdsQuery = () => {
  let { chainId } = useWeb3();
  const [ads, setAds] = useState<Ads>([]);

  const fetchAds = async () => {
    if (!chainId) {
      chainId = 80001; // default to mumbai
    }
    setAds((await queryGraph(chainId, "ads"))["ads"]);
  };

  useEffect(() => {
    fetchAds();
  }, [chainId]);

  return ads;
};

export const useMyAdsQuery = (address?: string) => {
  const { chainId } = useWeb3();
  const [ads, setAds] = useState<Ads>([]);

  const fetchAds = async () => {
    if (!chainId || !address) return;
    setAds((await queryGraph(chainId, "myAds", { me: address }))["ads"]);
  };

  useEffect(() => {
    fetchAds();
  }, [chainId]);

  return ads;
};
