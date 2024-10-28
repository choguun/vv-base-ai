# vv-base-ai

### How to deploy vv-base-ai

#### Deploy Aurora
* cd hardhat
* npx hardhat run aurora-script/01_deploy.ts --network auroraTestnet
* config contract address to all deploy scripts.
* npx hardhat run aurora-script/02_setup.ts --network auroraTestnet
* npx hardhat run aurora-script/03_quest.ts --network auroraTestnet
* npx hardhat run aurora-script/04_recipe.ts --network auroraTestnet
* npx hardhat run aurora-script/05_item.ts --network auroraTestnet

Demo:
https://aurora.voxelverses.xyz

#### How to run AI Agent
* cd ai-agent
#### Project Requirements
- Python >= 3.11

#### Setup
- Create a new file called .env
- Copy the contents of [.env.example](.env.example) into your new .env file
- API keys for third party tools are not provided.
  - `OPENAI_API_KEY` from OpenAI
  
  You can use other LLMs, in which case you can add a corresponding API key
  - `ANTHROPIC_API_KEY` from Anthropic
  - `MISTRAL_API_KEY` from Mistral 
  - [All models supplied by Ollama](https://ollama.com/library)
- Create a virtual Python environment
```
$ python -m venv ./venv
```
- Activate the Python virtual env.
  - Windows:
    - In cmd.exe: `venv\Scripts\activate.bat`
    - In PowerShell: `venv\Scripts\Activate.ps1`
  - Unix: `source venv/bin/activate`
- Install dependencies.
```
$ pip install -r requirements.txt
```

## Usage
- Run it
```
(venv) $ python vv-npc-agent.py
```
- Test your agent by calling it Chat API endpoint, `/api/chat`, to see the result:

```
curl --location 'localhost:8000/api/v1/chat' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": "user123",
    "session_id": "session123",
    "chat_data": {
        "messages": [
            { "role": "user", "content": "what is the base selling item on game?" }
        ]
    }
}'
```

### Technologies Used:

1. Smart Contract(Autonomous World) \
    1.1 On-chain in-game Items, Tokens, NFTs, and Game Logic \
    1.2 World Contract with Hooks feature \
    1.3 Built-in in-game DeFi
2. AI-generated content & LLM
3. Chainlink
4. AppKit

### Key Features:

1. On-chain Game Logic eg. Quest(Daily Check-in, Raffle, Mini game), Craft, Item, Token, Profile, and World.
2. Multiplayer
3. Supported Multi-Platform on browser
4. In-game DeFi
5. AI NPC

### How it works:
![How it works](/vv_howitwork.png "How it works")
