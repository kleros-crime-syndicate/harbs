import {
  AdSet,
  Transfer,
  ValuationSet,
  TaxPaid,
  TokenFunded
} from "../generated/templates/HarbergerAds/HarbergerAds";
import { Ad, Collection } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleTransfer(event: Transfer): void {
  let ad = Ad.load(`${event.params.tokenId}@${event.address}`);
  let collection = Collection.load(event.address.toHexString()) as Collection;

  if (!ad) {
    ad = new Ad(`${event.params.tokenId}@${event.address}`);
    ad.collection = event.address.toHexString();
    ad.collectionAddress = event.address;
    ad.uri = "https://nothing.com"; //filler
    ad.fund = BigInt.fromU32(0);
    ad.lastPaidTimestamp = event.block.timestamp;
    ad.nextValuationTimestamp = event.block.timestamp.plus(collection.cooldownPeriod);
    ad.valuation = BigInt.fromU32(0);
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
