const { ethers } = require('hardhat');

async function main() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0x29051b7f044ab62426bca8a2910fe1103ec3995f');

  // const account = "0x284185d5189e9bc1afa3d83eebb4a6e89befb6f4";
  // const registry = "0x017d81c2204930ec873ac351017cfde33c1de807";
  const item = "0x531e9363f1cd7c0c14a83c27b83a6e2a871afe13";
  const token = "0xde2ba44f76a2b75f455ed0165546200f41558c4e";
  const profile = "0x3d71d5221ffcae602df079d81445c93d979c51e7";
  const craft = "0x0af04cd58f61822834e23489fd041cf9d57da8d8";
  const vault = "0xbbe7956b4462b1dd3dddddcde2feb8d6646bf085";
  const oracle = "0x0a2dbe91448eeb6d0f72bfce0c288f40f4d36900";

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

  const tx8 = await deployedContract.setOracle(oracle);
  const receipt8 = await tx8.wait();

  console.log('Transaction receipt8: ', receipt8);

  console.log('======================== DONE ========================');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});