import { SUPPORTED_CHAIN_IDS } from "constants/chains";
import { SUBGRAPH_ENDPOINTS } from "constants/subgraph";
import { getSdk } from "generated/graphql";
import { GraphQLClient } from "graphql-request";

export type sdkReturnType = ReturnType<typeof getSdk>;
export type queryType = keyof sdkReturnType;
export type queryReturnType<Q extends queryType> = Record<number, Awaited<ReturnType<sdkReturnType[Q]>>>;

const sdk = SUPPORTED_CHAIN_IDS.reduce(
  (acc, chainID) => ({
    ...acc,
    [chainID]: getSdk(new GraphQLClient(SUBGRAPH_ENDPOINTS[chainID])),
  }),
  {} as Record<number, sdkReturnType>
);

export const queryGraph = async <Q extends queryType>(
  chainId: number,
  query: Q,
  ...params: Parameters<sdkReturnType[Q]>
): Promise<ReturnType<sdkReturnType[Q]>> => await sdk[chainId][query](...((params as any) || []));
