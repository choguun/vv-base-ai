# vv-base-ai

### How to deploy vv-base-ai

#### Deploy Contract
* cd hardhat
* npx hardhat run scripts/01_deploy_protocol.ts --network base
* config contract address to all deploy scripts.
* npx hardhat run scripts/02_setup_world.ts --network base
* npx hardhat run scripts/03_add_quest.ts --network base
* npx hardhat run scripts/04_add_recipe.ts --network base
* npx hardhat run scripts/05_add_gameitem.ts --network base

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
(venv) $ python main.py
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
            { "role": "user", "content": "Explain the concept of immutability in the context of Uniswap’s smart contracts. Why is this feature significant?" }
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
![How it works](/howitwork.png "How it works")

Demo:
https://base.voxelverses.xyz

