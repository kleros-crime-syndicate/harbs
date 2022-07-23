import { CollectionCreated } from "../generated/HarbergerAdsFactory/HarbergerAdsFactory";
import { HarbergerAds } from "../generated/templates/HarbergerAds/HarbergerAds";
import { Ad, Collection } from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleCollectionCreated(event: CollectionCreated): void {
  let collection = new Collection(event.params._address.toHexString());
  collection.adCount = event.params._totalSupply;
  collection.collector = event.params._collector;
  collection.cooldownPeriod = event.params._cooldownPeriod;
  collection.currency = event.params._currency;
  collection.taxRate = event.params._taxRate;

  let collectionContract = HarbergerAds.bind(event.params._address);
  collection.name = collectionContract.name();
  collection.symbol = collectionContract.symbol();
  collection.tokenURI = collectionContract.tokenURI(BigInt.fromU32(0));
  collection.save();

  for (let i = 0; i < event.params._totalSupply.toI32(); i++) {
    let ad = new Ad(`${i}@${event.params._address}`);
    ad.collection = collection.id;
    ad.collectionAddress = event.params._address;
    ad.owner = Bytes.fromHexString("0x0000000000000000000000000000000000000000");
    ad.save();
  }
}
