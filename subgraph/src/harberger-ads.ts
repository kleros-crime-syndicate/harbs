import { AdSet, Transfer, ValuationSet, TaxPaid, TokenFunded } from "../generated/templates/HarbergerAds/HarbergerAds";
import { Ad } from "../generated/schema";
import { TokenBought } from "../generated/templates/HarbergerAdsFull/HarbergerAdsFull";

export function handleTransfer(event: Transfer): void {
  let ad = Ad.load(`${event.params.tokenId}@${event.address.toHexString()}`) as Ad;
  ad.lastPaidTimestamp = event.block.timestamp;
  ad.owner = event.params.to;
  ad.save();
}

export function handleTokenBought(event: TokenBought): void {
  // doesn't do anything
}

export function handleAdSet(event: AdSet): void {
  let ad = Ad.load(`${event.params.tokenId}@${event.address.toHexString()}`) as Ad;
  ad.uri = event.params.uri;
  ad.save();
}

export function handleTokenFunded(event: TokenFunded): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address.toHexString()}`) as Ad;
  ad.fund = event.params._amount;
  ad.save();
}

export function handleValuationChanged(event: ValuationSet): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address.toHexString()}`) as Ad;
  ad.valuation = event.params._valuation;
  ad.nextValuationTimestamp = event.block.timestamp;

  ad.save();
}

export function handleTaxPaid(event: TaxPaid): void {
  let ad = Ad.load(`${event.params._tokenId}@${event.address.toHexString()}`) as Ad;
  ad.lastPaidTimestamp = event.block.timestamp;
  ad.fund = ad.fund.minus(event.params._value);

  ad.save();
}
