import { InjectedConnector } from "@web3-react/injected-connector";
import { SUPPORTED_CHAIN_IDS } from "constants/chains";

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});
