const { ethers } = require('hardhat');

async function main() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0x66f3747512e3f099de7686162e3351763938f879');

  // const account = "0x284185d5189e9bc1afa3d83eebb4a6e89befb6f4";
  // const registry = "0x017d81c2204930ec873ac351017cfde33c1de807";
  const item = "0x61f45759b6e992935a4ce7313f2a69b0ae06ee91";
  const token = "0x621f3687db5cee913db37e3345e27f07345840af";
  const profile = "0x5c2729a149190244051a36c55030ffbeafe17889";
  const craft = "0x6c4d1a8d6815dbc52047a199e1e40a137b0d095f";
  const vault = "0x942dfcabda2173a88b3bed045a19c1423aeac109";
  const chainId = 3441006;

  const tx = await deployedContract.setProfile(profile);
  const receipt = await tx.wait();

  console.log('Transaction receipt: ', receipt);

  const tx2 = await deployedContract.setToken(token);
  const receipt2 = await tx2.wait();

  console.log('Transaction receipt2: ', receipt2);

  const tx3 = await deployedContract.setItem(item);
  const receipt3 = await tx3.wait();

  console.log('Transaction receipt3: ', receipt3);

  // const tx4 = await deployedContract.configTokenBound(registry, account, chainId);
  // const receipt4 = await tx4.wait();

  // console.log('Transaction receipt4: ', receipt4);

  const tx5 = await deployedContract.setCraft(craft);
  const receipt5 = await tx5.wait();

  console.log('Transaction receipt5: ', receipt5);

  const CraftContract = await ethers.getContractFactory("CraftSystem");
  const deployedCraftContract = await CraftContract.attach(craft);

  const tx6 = await deployedCraftContract.setItem(item);
  const receipt6 = await tx6.wait();

  console.log('Transaction receipt7: ', receipt6);

  const tx7 = await deployedContract.setVault(vault);
  const receipt7 = await tx7.wait();

  console.log('Transaction receipt7: ', receipt7);

  console.log('======================== DONE ========================');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});