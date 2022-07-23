import { ChainID } from "./chains";

export const SUBGRAPH_ENDPOINTS: { [key in ChainID]: string } = {
  [ChainID.POLYGON]: "",
  [ChainID.MUMBAI]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/harbs-ads-mumbai",
};
