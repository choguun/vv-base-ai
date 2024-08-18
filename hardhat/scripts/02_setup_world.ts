const { ethers } = require('hardhat');

async function main() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0x41d6e8a70e97d4d20b619ef6f7b1ae825165cc1d');

  // const account = "0x284185d5189e9bc1afa3d83eebb4a6e89befb6f4";
  // const registry = "0x017d81c2204930ec873ac351017cfde33c1de807";
  const item = "0x4d3bbfc5f484593a008391de0fc8faed924c6476";
  const token = "0x0d41238ca884228086aff395ee0c89f1f05fbc97";
  const profile = "0xae47fc49e6641d5b64f9658f54dfaba005374dd1";
  const craft = "0xcd583ae7da1bae60032f09278ebcca228752c166";
  const vault = "0x794666ec57a9b4f59191a6bd59cf4e02a4dacc75";
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