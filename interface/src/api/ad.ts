import { AdQuery } from "generated/graphql";
import useWeb3 from "hooks/useWeb3";
import { useEffect, useState } from "react";
import { queryGraph } from ".";

type Ad = AdQuery["ad"];

export const useAdQuery = (id: string) => {
  const { chainId } = useWeb3();
  const [ad, setAd] = useState<Ad>();

  const fetchAd = async () => {
    console.log({ chainId });
    if (!chainId) return;
    setAd((await queryGraph(chainId, "ad", { id }))["ad"]);
  };

  useEffect(() => {
    fetchAd();
  }, [chainId]);

  return ad;
};
