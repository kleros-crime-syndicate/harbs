import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Property = {
  __typename?: 'Property';
  id: Scalars['ID'];
  info: Scalars['String'];
  owner: Scalars['Bytes'];
  valuation: Scalars['BigInt'];
};

export type Property_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  info?: InputMaybe<Scalars['String']>;
  info_contains?: InputMaybe<Scalars['String']>;
  info_contains_nocase?: InputMaybe<Scalars['String']>;
  info_ends_with?: InputMaybe<Scalars['String']>;
  info_ends_with_nocase?: InputMaybe<Scalars['String']>;
  info_gt?: InputMaybe<Scalars['String']>;
  info_gte?: InputMaybe<Scalars['String']>;
  info_in?: InputMaybe<Array<Scalars['String']>>;
  info_lt?: InputMaybe<Scalars['String']>;
  info_lte?: InputMaybe<Scalars['String']>;
  info_not?: InputMaybe<Scalars['String']>;
  info_not_contains?: InputMaybe<Scalars['String']>;
  info_not_contains_nocase?: InputMaybe<Scalars['String']>;
  info_not_ends_with?: InputMaybe<Scalars['String']>;
  info_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  info_not_in?: InputMaybe<Array<Scalars['String']>>;
  info_not_starts_with?: InputMaybe<Scalars['String']>;
  info_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  info_starts_with?: InputMaybe<Scalars['String']>;
  info_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  valuation?: InputMaybe<Scalars['BigInt']>;
  valuation_gt?: InputMaybe<Scalars['BigInt']>;
  valuation_gte?: InputMaybe<Scalars['BigInt']>;
  valuation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  valuation_lt?: InputMaybe<Scalars['BigInt']>;
  valuation_lte?: InputMaybe<Scalars['BigInt']>;
  valuation_not?: InputMaybe<Scalars['BigInt']>;
  valuation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Property_OrderBy {
  Id = 'id',
  Info = 'info',
  Owner = 'owner',
  Valuation = 'valuation'
}

export type Proposal = {
  __typename?: 'Proposal';
  creator: Scalars['Bytes'];
  description: Scalars['String'];
  id: Scalars['ID'];
  votingClosingTime: Scalars['BigInt'];
};

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  creator?: InputMaybe<Scalars['Bytes']>;
  creator_contains?: InputMaybe<Scalars['Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_not?: InputMaybe<Scalars['Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  votingClosingTime?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_gt?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_gte?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingClosingTime_lt?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_lte?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_not?: InputMaybe<Scalars['BigInt']>;
  votingClosingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Proposal_OrderBy {
  Creator = 'creator',
  Description = 'description',
  Id = 'id',
  VotingClosingTime = 'votingClosingTime'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};


export type QueryPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};


export type SubscriptionPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: string, owner: any, valuation: any, info: string }> };

export type ProposalsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProposalsQuery = { __typename?: 'Query', proposals: Array<{ __typename?: 'Proposal', id: string, creator: any, votingClosingTime: any, description: string }> };


export const PropertiesDocument = gql`
    query Properties {
  properties {
    id
    owner
    valuation
    info
  }
}
    `;
export const ProposalsDocument = gql`
    query Proposals {
  proposals {
    id
    creator
    votingClosingTime
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Properties(variables?: PropertiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PropertiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PropertiesQuery>(PropertiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Properties', 'query');
    },
    Proposals(variables?: ProposalsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProposalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProposalsQuery>(ProposalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Proposals', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;