import { expect } from "chai";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { BigNumber, utils } from "ethers";
import { Currency, HarbergerAdsFull, HarbergerAdsFactory } from "../typechain-types";

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
    factory = (await ethers.getContract("HarbergerAdsFactory")) as HarbergerAdsFactory;

    let tx = await factory.create(
      3,
      2000,
      100,
      ccy.address,
      deployer,
      "Harberger Ads - EthCC Hack 2022",
      "HAC",
      "ipfs/QmYmLeBs4pZcX2qD9Lup2SxKJGWHFFRpDhC4JDjsgJVXgt/harbs.json"
    );
    // console.log("tx: %O", tx);
    tx = await tx.wait();
    // console.log("events: %O", tx.events[1].args);
    ads = (await ethers.getContractFactory("HarbergerAdsFull")).attach(tx.events[1].args._address);
  });

  it("Buy", async () => {
    const offer = 1000;
    const valuation = 1500;
    const fund = 100;

    expect(await ads.totalSupply()).to.be.equal(3);

    await ccy.approve(ads.address, offer + fund);
    let tx = await ads.buy(0, offer, valuation, fund);
    expect(await ads.adsBalanceOf(deployer)).to.eq(1);

    expect(await ads.setAd(0, "just use kleros"))
      .to.emit("HarbergerAdsFull", "AdSet")
      .withArgs(0, "just use kleros");

    await expect(ads.changeValuation(0, valuation - 300))
      .to.be.revertedWith("Too soon to decrease");

    // wait
    await network.provider.send("evm_increaseTime", [110]);
    await network.provider.send("evm_mine");

    tx = await ads.changeValuation(0, valuation - 300);
  });
});
