import { CollectionCreated } from "../generated/HarbergerAdsFactory/HarbergerAdsFactory";
import {
  AdSet,
  Transfer,
  ValuationSet,
  TaxPaid,
  TokenFunded,
  HarbergerAds
} from "../generated/templates/HarbergerAds/HarbergerAds";
import { Ad, Collection } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleCollectionCreated(event: CollectionCreated): void {
  let collection = new Collection(event.params._address.toHexString());
  collection.adCount = event.params._adCount;
  collection.collector = event.params._collector;
  collection.cooldownPeriod = event.params._cooldownPeriod;
  collection.currency = event.params._currency;
  collection.taxRate = event.params._taxRate;

  let collectionContract = HarbergerAds.bind(event.params._address);
  collection.name = collectionContract.name();
  collection.symbol = collectionContract.symbol();
  collection.tokenURI = collectionContract.tokenURI(BigInt.fromU32(0));
  collection.save();
}

export function handleTransfer(event: Transfer): void {
  let ad = Ad.load(`${event.params.tokenId}@${event.address}`);

  if (!ad) {
    ad = new Ad(`${event.params.tokenId}@${event.address}`);
  }

  ad.owner = event.params.to;
  ad.save();
}

export function handleAdSet(event: AdSet): void {
  let ad = Ad.load(`${event.params.tokenId}@${event.address}`) as Ad;
  ad.uri = event.params.uri;
  ad.save();
}

export function handleTokenFunded(event: TokenFunded): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address}`) as Ad;
  ad.fund = event.params._amount;
  ad.save();
}

export function handleValuationChanged(event: ValuationSet): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address}`) as Ad;
  ad.valuation = event.params._valuation;
  ad.nextValuationTimestamp = event.block.timestamp;

  ad.save();
}

export function handleTaxPaid(event: TaxPaid): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address}`) as Ad;
  ad.lastPaidTimestamp = event.block.timestamp;
  ad.fund = ad.fund.minus(event.params._value);
  
  ad.save();
}
