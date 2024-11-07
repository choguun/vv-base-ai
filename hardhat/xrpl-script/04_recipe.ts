
async function mainxrpl4() {
    const Contract = await ethers.getContractFactory("World");
    const deployedContract = await Contract.attach('0x10c57A3eF49E2Bf7A96E541b0fFEf7aDA8579A40');
  
    // addItem
    const tx4 = await deployedContract.addItems(0, 0);
    const receipt4 = await tx4.wait();
    console.log('Transaction receipt4: ', receipt4);
  
    const tx5 = await deployedContract.addItems(1, 1);
    const receipt5 = await tx5.wait();
    console.log('Transaction receipt4: ', receipt5);
  
    const tx6 = await deployedContract.addItems(2, 2);
    const receipt6 = await tx6.wait()
    ;
    console.log('Transaction receipt4: ', receipt6);
  
    // 2 PICKAXE = 1 METAL PICKAXE
    const tx1 = await deployedContract.addRecipe([0], [2], 1);
    const receipt1 = await tx1.wait();
  
    console.log('Transaction receipt1: ', receipt1);
  
    // 2 METAL PICKAXE = 1 GOLDEN PICKAXE
    const tx2 = await deployedContract.addRecipe([1], [2], 2);
    const receipt2 = await tx2.wait();
  
    console.log('Transaction receipt2: ', receipt2);
  
    console.log('======================== DONE ========================');
  }
  
  mainxrpl4()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });