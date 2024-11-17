async function maintaiko2() { 
  const world = "0x10c57A3eF49E2Bf7A96E541b0fFEf7aDA8579A40";
  const WorldContract = await ethers.getContractFactory("World");
  const deployedContract = await WorldContract.attach(world);
  
  const item = "0x1e27D4E0Eb0dddF403FaE76fde2DbAf6Da25C4A6";
  const potion = "0xebA233A625f9B401a43763A2b5F1294371E569f4";
  const token = "0xa7331aaebf89DC1C8a6F5a4bd60F6fB45bE1832c";
  const profile = "0xd89203438e7fB77B8e1fae4eB3098E1c6A5D5b0e";
  const craft = "0x4475537870a035f0786D5d0b82dc72D497D9f671";
  const vault = "0xC63Ad50041cc370D220004Dae696674Da2814f8e";

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

maintaiko2()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});