import { ChainID } from "./chains";

export const SUBGRAPH_ENDPOINTS: { [key in ChainID]: string } = {
  [ChainID.MAINNET]:
    "https://api.thegraph.com/subgraphs/name/kleros/proof-of-humanity-mainnet",
};
