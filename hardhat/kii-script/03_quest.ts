
async function mainkii3() {
    const Contract = await ethers.getContractFactory("World");
    const deployedContract = await Contract.attach('0x465D5fc7bd74f73B8Ea0e5bD716522983eDCD44A');
  
    // createQuest(string memory _name, string memory _description, uint256 _reward, QuestType _questType)
    // 1. daily check in 
    const tx1 = await deployedContract.createQuest("dailyCheckIn", "Daily Check In", 250, 0);
    const receipt1 = await tx1.wait();
  
    console.log('dailyCheckIn receipt1: ', receipt1);
  
    // 2. daily play mini game
    const tx2 = await deployedContract.createQuest("miniGame", "Play mini game", 500, 1);
    const receipt2 = await tx2.wait();
  
    console.log('miniGame receipt2: ', receipt2);
  
    // 3. daily do craft item
    const tx3 = await deployedContract.createQuest("doCraft", "Do Craft", 300, 2);
    const receipt3 = await tx3.wait();
  
    console.log('doCraft receipt3: ', receipt3);
  
    console.log('======================== DONE ========================');
  }
  
  mainkii3()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });