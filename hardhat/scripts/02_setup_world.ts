const { ethers } = require('hardhat');

async function main2() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0x8c512f0077efB9fd7aafb6E914F48a71868cFf41');

  const item = "0x0673F20FAB85Fd5d7a392436086c51038a483712";
  const potion = "0x11850B9E51F1A8E1c86D23bAc649FF9E82ECb4Fa";
  const token = "0xeF823Db9A153Ac9EbdF0100Fd7957c59E1Ab2E49";
  const profile = "0x8D145bA09c387E60D373aA1D432576E6a790aa81";
  const craft = "0xa3D6F8f0455250d3679C5A9d418Fb190c8FBA6e5";
  const vault = "0x026e6C5d10fB2655f39a5B367C2Ff80af9215AC5";

  const tx = await deployedContract.setProfile(profile);
  const receipt = await tx.wait();

  console.log('Transaction receipt: ', receipt);

  const tx2 = await deployedContract.setToken(token);
  const receipt2 = await tx2.wait();

  console.log('Transaction receipt2: ', receipt2);

  const tx3 = await deployedContract.setItem(item);
  const receipt3 = await tx3.wait();

  console.log('Transaction receipt3: ', receipt3);

  const tx4 = await deployedContract.setPotion(potion);
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