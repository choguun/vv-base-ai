
async function maintaiko5() {
    const Contract = await ethers.getContractFactory("World");
    const deployedContract = await Contract.attach('0x10c57A3eF49E2Bf7A96E541b0fFEf7aDA8579A40');
  
    const tx1 = await deployedContract.createItem(0, "PICKAXE", "PICKAXE", 100);
    const receipt1 = await tx1.wait();

    console.log('Transaction receipt1: ', receipt1);

    const tx2 = await deployedContract.createItem(1, "METAL PICKAXE", "METAL PICKAXE", 250);
    const receipt2 = await tx2.wait();

    console.log('Transaction receipt2: ', receipt2);

    const tx3 = await deployedContract.createItem(2, "GOLDEN PICKAXE", "GOLDEN PICKAXE", 600);
    const receipt3 = await tx3.wait(); 
  
    console.log('======================== DONE ========================');
  }
  
  maintaiko5()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });