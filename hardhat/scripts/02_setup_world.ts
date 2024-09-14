const { ethers } = require('hardhat');

async function main2() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0x6a4cc675515e2d0f6c4473245b3ddc02cec7940a');

  const item = "0x284185d5189e9bc1afa3d83eebb4a6e89befb6f4";
  const potion = "0x3fe5a36f199b3f76c6e1b7dfcb5a0786a195cffe";
  const token = "0xbe32e79e1160264299bb97f19ef229d7fb47523e";
  const profile = "0x5766d27e635f2141618d33c498461f9d22d0d66a";
  const craft = "0xa25f9c4988ba67e4813401aeac467968c0baa511";
  const vault = "0x017d81c2204930ec873ac351017cfde33c1de807";

  const tx = await deployedContract.setProfile(profile);
  const receipt = await tx.wait();

  console.log('Transaction receipt: ', receipt);

  const tx2 = await deployedContract.setToken(token);
  const receipt2 = await tx2.wait();

  console.log('Transaction receipt2: ', receipt2);

  const tx3 = await deployedContract.setItem(item);
  const receipt3 = await tx3.wait();

  console.log('Transaction receipt3: ', receipt3);

  const tx4 = await deployedContract.setItem(potion);
  const receipt4 = await tx4.wait();

  console.log('Transaction receipt4: ', receipt4);

  const tx5 = await deployedContract.setCraft(craft);
  const receipt5 = await tx5.wait();

  console.log('Transaction receipt5: ', receipt5);

  const CraftContract = await ethers.getContractFactory("CraftSystem");
  const deployedCraftContract = await CraftContract.attach(craft);

  const tx6 = await deployedCraftContract.setItem(item);
  const receipt6 = await tx6.wait();

  console.log('Transaction receipt6: ', receipt6);

  const tx7 = await deployedContract.setVault(vault);
  const receipt7 = await tx7.wait();

  console.log('Transaction receipt7: ', receipt7);

  console.log('======================== DONE ========================');
}

main2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});