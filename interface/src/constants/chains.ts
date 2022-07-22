export enum ChainID {
  MAINNET = 1,
}

export const CHAIN_ID_TO_NAME = {
  [ChainID.MAINNET]: "mainnet",
};

export const SUPPORTED_CHAIN_IDS = [ChainID.MAINNET];
