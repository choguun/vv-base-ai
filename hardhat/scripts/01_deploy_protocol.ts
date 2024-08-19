import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const owner = "0x1a46582A48a04c67D78e062E0631cDDE9fD2DF0a";

  const world = await hre.viem.deployContract("World", [owner]);
  const randomOracle = await hre.viem.deployContract("SubscriptionConsumer", [111050927125045824511614274940509035041704935106337038931065260344527599144970, world.address]);
  const profile = await hre.viem.deployContract("Profile", [owner]);
  const token = await hre.viem.deployContract("Token", [owner, world.address, profile.address]);
  const potion = await hre.viem.deployContract("Potion", [owner, world.address, token.address]);
  const craft = await hre.viem.deployContract("CraftSystem", [owner, world.address]);
  const item = await hre.viem.deployContract("Item", [owner, world.address, craft.address, ""]);
  const vault = await hre.viem.deployContract("ERC4626Vault", [token.address]);
  const dataOracle = await hre.viem.deployContract("DataConsumerV3");

  // const erc6551Account  = await hre.viem.deployContract("ERC6551Account");
  // const erc6551Registry = await hre.viem.deployContract("ERC6551Registry");

  await token.write.setWorld([world.address as `0x${string}`]);
  
  // console.log(
  //   `account address: ${erc6551Account.address}`
  // );
  // console.log(
  //   `registry address: ${erc6551Registry.address}`
  // );
  console.log(
    `item address: ${item.address}`
  );
  console.log(
    `token address: ${token.address}`
  );
  console.log(
    `token address: ${potion.address}`
  );
  console.log(
    `profile address: ${profile.address}`
  );
  console.log(
    `craft address: ${craft.address}`
  );
  console.log(
    `vault address: ${vault.address}`
  )
  console.log(
    `dataoracle address: ${dataOracle.address}`
  )
  console.log(
    `randomoracle address: ${randomOracle.address}`
  )
  console.log(
    `world address: ${world.address}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
