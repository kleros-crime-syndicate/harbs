import { AdsQuery } from "generated/graphql";
import useWeb3 from "hooks/useWeb3";
import { useEffect, useState } from "react";
import { queryGraph } from ".";

type Ads = AdsQuery["ads"];

export const useAdsQuery = () => {
  const { chainId } = useWeb3();
  const [ads, setAds] = useState<Ads>([]);

  const fetchAds = async () => {
    console.log({ chainId });
    if (!chainId) return;
    setAds((await queryGraph(chainId, "ads"))["ads"]);
  };

  useEffect(() => {
    fetchAds();
  }, [chainId]);

  return ads;
};
