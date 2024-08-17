# frax-cubeland-contract

### How to deploy frax-cubeland-contract

* npx hardhat run scripts/01_deploy_protocol.ts --network mainnet
* config contract address to all deploy scripts.
* npx hardhat run scripts/02_setup_world.ts --network mainnet
* npx hardhat run scripts/03_add_quest.ts --network mainnet
* npx hardhat run scripts/04_add_recipe.ts --network mainnet
* npx hardhat run scripts/05_add_gameitem.ts --network mainnet 

### Technologies Used:

1. Smart Contract \
1.1 On-chain in-game Items and Token \
1.2 World (Game Logic) \
1.3 Integrated with FRAX ecosystem on Fraxtal(FRAX, sFRAX, FRAXSwap) 
3. IPFS Storage to store game metadata
4. WebGL to render game on browser
5. Game Engine(Real-time Open World, Indexer)
6. AI-generated content & LLM

### Key Features:

1. On-chain Game Logic eg. Quest(Daily Check-in, Raffle, Mini game), Craft, Item, Token, Profile, and World.
2. Token bound account; user truly owns their asset on their Profile NFT.
3. Multiplayer
4. Supported Multi-Platform on browser
5. In-game DeFi with FRAX

### How it works:
![How it works](/howitwork.png "How it works")

Demo:
https://www.cubesland.xyz

### Business Model
1. Sell NFT and in-game items
2. Platform fees