import { CollectionCreated } from "../generated/HarbergerAdsFactory/HarbergerAdsFactory";
import { HarbergerAdsFull } from "../generated/templates/HarbergerAdsFull/HarbergerAdsFull";
import { HarbergerAdsFull as HAFSource } from '../generated/templates';
import { Ad, Collection } from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleCollectionCreated(event: CollectionCreated): void {
  HAFSource.create(event.params._address);
  
  let collection = new Collection(event.params._address.toHexString());
  collection.adCount = event.params._totalSupply;
  collection.collector = event.params._collector;
  collection.cooldownPeriod = event.params._cooldownPeriod;
  collection.currency = event.params._currency;
  collection.taxRate = event.params._taxRate;

  let collectionContract = HarbergerAdsFull.bind(event.params._address);
  collection.name = collectionContract.name();
  collection.symbol = collectionContract.symbol();
  collection.tokenURI = collectionContract.tokenURI(BigInt.fromU32(0));
  collection.save();

  for (let i = 0; i < event.params._totalSupply.toI32(); i++) {
    let ad = new Ad(`${i}@${collection.id}`);
    ad.collection = collection.id;
    ad.collectionAddress = event.params._address;
    ad.owner = Bytes.fromHexString("0x0000000000000000000000000000000000000000");
    ad.valuation = BigInt.fromU32(0);
    ad.fund = BigInt.fromU32(0);
    ad.lastPaidTimestamp = BigInt.fromU32(0);
    ad.nextValuationTimestamp = BigInt.fromU32(0);
    ad.save();
  }
}
