async function mainb2() { 
  const world = "0x219b6840845a3f62D79baE6d3FBF745266813f3e";
  const WorldContract = await ethers.getContractFactory("World");
  const deployedContract = await WorldContract.attach(world);
  
  const item = "0x8D145bA09c387E60D373aA1D432576E6a790aa81";
  const potion = "0x463A82C3B78D8EB2D14c7C9131EC14D16aaE9cf3";
  const token = "0x53Cce60a0D834f82646Ea019E5fBA6449Bc0e07e";
  const profile = "0x346b4427C50ed0474cbD7d391AB9b95107d3eC80";
  const craft = "0x8c512f0077efB9fd7aafb6E914F48a71868cFf41";
  const vault = "0xeF823Db9A153Ac9EbdF0100Fd7957c59E1Ab2E49";

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

mainb2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});