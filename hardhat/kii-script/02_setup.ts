async function mainkii2() { 
  const world = "0x465D5fc7bd74f73B8Ea0e5bD716522983eDCD44A";
  const WorldContract = await ethers.getContractFactory("World");
  const deployedContract = await WorldContract.attach(world);
  
  const item = "0xAF98CEB505c16dD4d7d0404104d02A5A17f7a774";
  const potion = "0xE84e47891B28f8a29ab2f1aAAF047A361852620F";
  const token = "0x47A9D4613b93B3aF955C918E1379A61B7b5392B9";
  const profile = "0x58615910B3206569ab58a17F20F250ed6c054339";
  const craft = "0xA3D093821e81eddaF43a6091EC308831dE9bf056";
  const vault = "0xC987c9A034227C40D35E6BebaF0f9391531D2BAC";

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

mainkii2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});