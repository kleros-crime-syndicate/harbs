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

export type Ad = {
  __typename?: 'Ad';
  /** Collection this ad belongs to */
  collection: Collection;
  /** Address of the collection */
  collectionAddress: Scalars['Bytes'];
  /** Funds allocated to pay for taxes */
  fund: Scalars['BigInt'];
  /** {token_id}@{contract_address} */
  id: Scalars['ID'];
  /** Last time taxes were paid, used to compute due taxes */
  lastPaidTimestamp: Scalars['BigInt'];
  /** Next time the valuation will be able to decrease or partially defund */
  nextValuationTimestamp: Scalars['BigInt'];
  /** Owner of the item, and taxpayer */
  owner: Scalars['Bytes'];
  /** Uri of the image */
  uri?: Maybe<Scalars['String']>;
  /** Current valuation of the item */
  valuation: Scalars['BigInt'];
};

export type Ad_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  collection?: InputMaybe<Scalars['String']>;
  collectionAddress?: InputMaybe<Scalars['Bytes']>;
  collectionAddress_contains?: InputMaybe<Scalars['Bytes']>;
  collectionAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collectionAddress_not?: InputMaybe<Scalars['Bytes']>;
  collectionAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  collectionAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund?: InputMaybe<Scalars['BigInt']>;
  fund_gt?: InputMaybe<Scalars['BigInt']>;
  fund_gte?: InputMaybe<Scalars['BigInt']>;
  fund_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fund_lt?: InputMaybe<Scalars['BigInt']>;
  fund_lte?: InputMaybe<Scalars['BigInt']>;
  fund_not?: InputMaybe<Scalars['BigInt']>;
  fund_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastPaidTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValuationTimestamp?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValuationTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  nextValuationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  valuation?: InputMaybe<Scalars['BigInt']>;
  valuation_gt?: InputMaybe<Scalars['BigInt']>;
  valuation_gte?: InputMaybe<Scalars['BigInt']>;
  valuation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  valuation_lt?: InputMaybe<Scalars['BigInt']>;
  valuation_lte?: InputMaybe<Scalars['BigInt']>;
  valuation_not?: InputMaybe<Scalars['BigInt']>;
  valuation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Ad_OrderBy {
  Collection = 'collection',
  CollectionAddress = 'collectionAddress',
  Fund = 'fund',
  Id = 'id',
  LastPaidTimestamp = 'lastPaidTimestamp',
  NextValuationTimestamp = 'nextValuationTimestamp',
  Owner = 'owner',
  Uri = 'uri',
  Valuation = 'valuation'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Collection = {
  __typename?: 'Collection';
  /** How many ads does the collection have */
  adCount: Scalars['BigInt'];
  /** Ads belonging to this collection */
  ads: Array<Ad>;
  /** Address that receives the taxes */
  collector: Scalars['Bytes'];
  /** Period of time needed to partially defund or decrease valuation */
  cooldownPeriod: Scalars['BigInt'];
  /** Address of the ERC-20 token used to value or tax */
  currency: Scalars['Bytes'];
  /** Symbol of the currency */
  currencySymbol?: Maybe<Scalars['String']>;
  /** {contract_address} */
  id: Scalars['ID'];
  /** Name of the collection */
  name: Scalars['String'];
  /** Symbol of the collection */
  symbol: Scalars['String'];
  /** Tax rate per year */
  taxRate: Scalars['BigInt'];
  /** Token URI of the collection */
  tokenURI: Scalars['String'];
};


export type CollectionAdsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ad_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ad_Filter>;
};

export type Collection_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adCount?: InputMaybe<Scalars['BigInt']>;
  adCount_gt?: InputMaybe<Scalars['BigInt']>;
  adCount_gte?: InputMaybe<Scalars['BigInt']>;
  adCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adCount_lt?: InputMaybe<Scalars['BigInt']>;
  adCount_lte?: InputMaybe<Scalars['BigInt']>;
  adCount_not?: InputMaybe<Scalars['BigInt']>;
  adCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ads_?: InputMaybe<Ad_Filter>;
  collector?: InputMaybe<Scalars['Bytes']>;
  collector_contains?: InputMaybe<Scalars['Bytes']>;
  collector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collector_not?: InputMaybe<Scalars['Bytes']>;
  collector_not_contains?: InputMaybe<Scalars['Bytes']>;
  collector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  cooldownPeriod?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cooldownPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_not?: InputMaybe<Scalars['BigInt']>;
  cooldownPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currency?: InputMaybe<Scalars['Bytes']>;
  currencySymbol?: InputMaybe<Scalars['String']>;
  currencySymbol_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_gt?: InputMaybe<Scalars['String']>;
  currencySymbol_gte?: InputMaybe<Scalars['String']>;
  currencySymbol_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_lt?: InputMaybe<Scalars['String']>;
  currencySymbol_lte?: InputMaybe<Scalars['String']>;
  currencySymbol_not?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_contains?: InputMaybe<Scalars['Bytes']>;
  currency_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currency_not?: InputMaybe<Scalars['Bytes']>;
  currency_not_contains?: InputMaybe<Scalars['Bytes']>;
  currency_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['BigInt']>;
  taxRate_gt?: InputMaybe<Scalars['BigInt']>;
  taxRate_gte?: InputMaybe<Scalars['BigInt']>;
  taxRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxRate_lt?: InputMaybe<Scalars['BigInt']>;
  taxRate_lte?: InputMaybe<Scalars['BigInt']>;
  taxRate_not?: InputMaybe<Scalars['BigInt']>;
  taxRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Collection_OrderBy {
  AdCount = 'adCount',
  Ads = 'ads',
  Collector = 'collector',
  CooldownPeriod = 'cooldownPeriod',
  Currency = 'currency',
  CurrencySymbol = 'currencySymbol',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TaxRate = 'taxRate',
  TokenUri = 'tokenURI'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ad?: Maybe<Ad>;
  ads: Array<Ad>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ad_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ad_Filter>;
};


export type QueryCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ad?: Maybe<Ad>;
  ads: Array<Ad>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ad_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ad_Filter>;
};


export type SubscriptionCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
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

export type AdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdQuery = { __typename?: 'Query', ad?: { __typename?: 'Ad', id: string, owner: any, uri?: string | null, valuation: any, collectionAddress: any, fund: any, lastPaidTimestamp: any, nextValuationTimestamp: any, collection: { __typename?: 'Collection', name: string, symbol: string, tokenURI: string, taxRate: any, currency: any, cooldownPeriod: any, collector: any, adCount: any } } | null };

export type AdsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdsQuery = { __typename?: 'Query', ads: Array<{ __typename?: 'Ad', id: string, owner: any, uri?: string | null, valuation: any, collectionAddress: any, fund: any, lastPaidTimestamp: any, nextValuationTimestamp: any, collection: { __typename?: 'Collection', name: string, symbol: string, tokenURI: string, taxRate: any, currency: any, cooldownPeriod: any, collector: any, adCount: any } }> };

export type MyAdsQueryVariables = Exact<{
  me: Scalars['Bytes'];
}>;


export type MyAdsQuery = { __typename?: 'Query', ads: Array<{ __typename?: 'Ad', id: string, owner: any, uri?: string | null, valuation: any, collection: { __typename?: 'Collection', name: string, symbol: string } }> };


export const AdDocument = gql`
    query ad($id: ID!) {
  ad(id: $id) {
    id
    owner
    uri
    valuation
    collectionAddress
    fund
    lastPaidTimestamp
    nextValuationTimestamp
    collection {
      name
      symbol
      tokenURI
      taxRate
      currency
      cooldownPeriod
      collector
      adCount
    }
  }
}
    `;
export const AdsDocument = gql`
    query ads {
  ads(orderBy: collectionAddress) {
    id
    owner
    uri
    valuation
    collectionAddress
    fund
    lastPaidTimestamp
    nextValuationTimestamp
    collection {
      name
      symbol
      tokenURI
      taxRate
      currency
      cooldownPeriod
      collector
      adCount
    }
  }
}
    `;
export const MyAdsDocument = gql`
    query myAds($me: Bytes!) {
  ads(where: {owner: $me}) {
    id
    owner
    uri
    valuation
    collection {
      name
      symbol
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ad(variables: AdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdQuery>(AdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ad', 'query');
    },
    ads(variables?: AdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdsQuery>(AdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ads', 'query');
    },
    myAds(variables: MyAdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MyAdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyAdsQuery>(MyAdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'myAds', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;