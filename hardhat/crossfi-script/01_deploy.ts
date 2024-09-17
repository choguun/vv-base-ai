import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function maincross() {
  const owner = "0x1a46582A48a04c67D78e062E0631cDDE9fD2DF0a";

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

//   await token.setWorld([world.target]);
  
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
maincross().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
