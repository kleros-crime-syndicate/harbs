import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { BigNumber } from "ethers";

const deployArbitration: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute } = deployments;
  const { AddressZero } = hre.ethers.constants;

  // fallback to hardhat node signers on local network
  const deployer = (await getNamedAccounts()).deployer ?? (await hre.ethers.getSigners())[0].address;

  // TODO: not implemented yet
  const erc20 = await deploy("ERC20", {
    from: deployer,
    args: ["TODO"],
    log: true,
  });

  const ads = await deploy("HarbergerAds", {
    from: deployer,
    args: [2000, erc20.address],
    log: true,
  });

};

export default deployArbitration;
