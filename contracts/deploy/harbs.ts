import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployArbitration: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute } = deployments;
  const { AddressZero } = hre.ethers.constants;

  // fallback to hardhat node signers on local network
  const deployer = (await getNamedAccounts()).deployer ?? (await hre.ethers.getSigners())[0].address;

  // TODO: not implemented yet
  const erc20 = await deploy("Currency", {
    from: deployer,
    args: ["Harberger Ads Currency", "HAC", 18],
    log: true,
  });

  const factory = await deploy("HarbergerAdsFactory", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 1
  })

  await execute("HarbergerAdsFactory", {from: deployer, log: true}, "create", 3, 2000, 100, erc20.address, deployer)

};

export default deployArbitration;
