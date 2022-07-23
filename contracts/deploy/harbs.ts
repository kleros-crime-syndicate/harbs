import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployArbitration: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute } = deployments;
  const { AddressZero } = hre.ethers.constants;

  // fallback to hardhat node signers on local network
  const deployer = (await getNamedAccounts()).deployer ?? (await hre.ethers.getSigners())[0].address;

  let erc20Address;
  const chainId = await getChainId();
  if (chainId === "31337") {
    // Hardhat network
    console.log("Hardhat network");
    erc20Address = (
      await deploy("Currency", {
        from: deployer,
        args: ["Harberger Ads Currency", "HAC", 18],
        log: true,
      })
    ).address;
  } else if (chainId === "80001") {
    // Mumbai wMATIC
    erc20Address = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";
  }

  // Only for verification on PolygonScan, otherwise the ABI will remain unknown.
  await deploy("HarbergerAds", {
    from: deployer,
    args: [
      3,
      2000,
      100,
      erc20Address,
      deployer,
      "EthCC Hack 2022",
      "HAC",
      "ipfs/QmYmLeBs4pZcX2qD9Lup2SxKJGWHFFRpDhC4JDjsgJVXgt/harbs.json",
    ],
    log: true,
  });

  const factory = await deploy("HarbergerAdsFactory", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 1,
  });

  await execute(
    "HarbergerAdsFactory",
    { from: deployer, log: true },
    "create",
    3,
    2000,
    100,
    erc20Address,
    deployer,
    "EthCC Hack 2022",
    "HAC",
    "ipfs/QmYmLeBs4pZcX2qD9Lup2SxKJGWHFFRpDhC4JDjsgJVXgt/harbs.json"
  );
};

export default deployArbitration;
