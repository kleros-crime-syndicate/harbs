import { expect } from "chai";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { BigNumber, utils } from "ethers";
import {
  Currency,
  HarbergerAds,
  HarbergerAdsFactory,
} from "../typechain-types";

/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */ // https://github.com/standard/standard/issues/690#issuecomment-278533482

describe("EthCC Hack 2022", async () => {
  const ONE_TENTH_ETH = BigNumber.from(10).pow(17);
  const ONE_ETH = BigNumber.from(10).pow(18);

  let deployer;
  let ccy, ads, factory;

  beforeEach("Setup", async () => {
    deployer = (await getNamedAccounts()).deployer;

    console.log("deployer:%s", deployer);
    console.log("named accounts: %O", await getNamedAccounts());

    await deployments.fixture(["Harbs"], {
      fallbackToGlobal: true,
      keepExistingDeployments: false,
    });
    ccy = (await ethers.getContract("Currency")) as Currency;
    ads = (await ethers.getContract("HarbergerAds")) as HarbergerAds;
    factory = (await ethers.getContract("HarbergerAdsFactory")) as HarbergerAdsFactory;
  });

  it("Buy", async () => {
    const offer = 1000;
    const valuation = 1500;
    const fund = 100;
    await ccy.approve(ads.address, offer + fund)
    let tx = await ads.buy(0, offer, valuation, fund);
    expect(await ads.balanceOf(deployer)).to.eq(1);
  });
});