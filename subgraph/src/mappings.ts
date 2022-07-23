import { CollectionCreated } from "../generated/HarbergerAdsFactory/HarbergerAdsFactory";
import {
  AdFundChanged,
  AdSet,
  Transfer,
  ValuationChanged,
  TaxPaid,
} from "../generated/templates/HarbergerAds/HarbergerAds";
import { Ad, Collection } from "../generated/schema";

export function handleCollectionCreated(event: CollectionCreated): void {
  let collection = new Collection(event.params.contractAddress.toHex());
  collection.adCount = event.params.adCount;
  collection.collector = event.params.collector;
  collection.cooldownPeriod = event.params.cooldownPeriod;
  collection.currency = event.params.currency;
  collection.name = event.params.name;
  collection.taxRate = event.params.taxRate;
  collection.save();
}

export function handleTransfer(event: Transfer): void {
  let ad = Ad.load(event.params.tokenId);

  if (!ad) {
    ad = new Ad(event.params.tokenId);
  }

  ad.owner = event.params.to;
  ad.save();
}

export function handleAdSet(event: AdSet): void {
  let ad = Ad.load(event.params.tokenId);
  ad.uri = event.params.uri;
  ad.save();
}

export function handleAdFundChanged(event: AdFundChanged): void {
  let ad = Ad.load(event.params.tokenId);
  ad.fund = event.params.value;
  ad.save();
}

export function handleValuationChanged(event: ValuationChanged): void {
  let ad = Ad.load(event.params.tokenId);
  ad.valuation = event.params.valuation;
  // ad.nextValuationTimestamp
  ad.save();
}

export function handleTaxPaid(event: TaxPaid): void {
  let ad = Ad.load(event.params.tokenId);
  // ad.lastPaidTimestamp
  ad.save();
}
