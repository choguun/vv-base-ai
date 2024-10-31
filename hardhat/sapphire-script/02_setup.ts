async function mainsapp2() { 
  const world = "0xcba9eFfAdD8934aA769C633DFe7B98D9c2C887be";
  const WorldContract = await ethers.getContractFactory("World");
  const deployedContract = await WorldContract.attach(world);
  
  const item = "0xd06b5a486f7239AE03a0af3e38E2041c932B0920";
  const potion = "0xB98f0281b9B220eA3e44c83c69672264FEbb0e17";
  const token = "0xeAaDA7D04CBC145224b6D75d3362fA8015298898";
  const profile = "0xe2e63Cfd26459C8B1ca11271eE6AB7Cf03eC4271";
  const craft = "0xb35c508208EAf6E683d0d5B58B1aC11602B46B45";
  const vault = "0x255B4Ae1617A06B9693894755dB15f6c890b4103";

  const TokenContract = await ethers.getContractFactory("Token");
  const tokenContract = await TokenContract.attach(token);

  const tx0 = await tokenContract.setWorld(world);
  const receipt0 = await tx0.wait();

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

mainsapp2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});