export enum ChainID {
  POLYGON = 137,
  MUMBAI = 80001,
}

export const CHAIN_ID_TO_NAME = {
  [ChainID.MUMBAI]: "mumbai",
  [ChainID.POLYGON]: "POLYGON",
};

export const SUPPORTED_CHAIN_IDS = [ChainID.MUMBAI];
