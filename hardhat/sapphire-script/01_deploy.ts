import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function mainsapp() {
  const owner = "0xA812D8dA36aAC49AE943cD287e24421B18fD13D3";

  const world = await hre.ethers.deployContract("World", [owner]);
  await world.waitForDeployment();

  const profile = await hre.ethers.deployContract("Profile", [owner]);
  await profile.waitForDeployment();

  const token = await hre.ethers.deployContract("Token", [owner, world.target, profile.target]);
  await token.waitForDeployment();

  const potion = await hre.ethers.deployContract("Potion", [owner, world.target, token.target]);
  await potion.waitForDeployment();

  const craft = await hre.ethers.deployContract("CraftSystem", [owner, world.target]);
  await craft.waitForDeployment();

  const item = await hre.ethers.deployContract("Item", [owner, world.target, craft.target, ""]);
  await item.waitForDeployment();

  const vault = await hre.ethers.deployContract("ERC4626Vault", [token.target]);
  await vault.waitForDeployment();

  
  console.log(
    `item address: ${item.target}`
  );
  console.log(
    `potion address: ${potion.target}`
  );
  console.log(
    `token address: ${token.target}`
  );
  console.log(
    `profile address: ${profile.target}`
  );
  console.log(
    `craft address: ${craft.target}`
  );
  console.log(
    `vault address: ${vault.target}`
  )
  console.log(
    `world address: ${world.target}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
mainsapp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
