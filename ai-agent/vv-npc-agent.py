from hive_agent import HiveAgent
import os
import logging
from typing import Optional, Dict
from web3 import Web3
from dotenv import load_dotenv
import json

load_dotenv()

rpc_url = os.getenv("RPC_URL") # add an ETH Mainnet HTTP RPC URL to your `.env` file
world_contract_address = os.getenv("WORLD_CONTRACT_ADDRESS") # add the Voxelverses contract address to your `.env` file

logging.basicConfig(level=logging.INFO)

with open('lend_borrow_agent/aave_lending_pool_abi.json', 'r') as abi_file:
    world_contract_abi = json.load(abi_file)

def get_config_path(filename):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), filename))

def get_transaction_receipt(transaction_hash: str) -> Optional[Dict]:
    """
    Fetches the receipt of a specified transaction on the Ethereum blockchain and returns it as a dictionary.

    :param transaction_hash: The hash of the transaction to fetch the receipt for.
    :return: A dictionary containing the transaction receipt details, or None if the transaction cannot be found.
    """
    web3 = Web3(Web3.HTTPProvider(rpc_url))

    if not web3.is_connected():
        print("unable to connect to Ethereum")
        return None

    try:
        transaction_receipt = web3.eth.get_transaction_receipt(transaction_hash)
        return dict(transaction_receipt)
    except Exception as e:
        print(f"an error occurred: {e}")
        return None

def query_world_data(world_id: int) -> Optional[Dict]:
    """
    Query world data from the Voxelverses contract.

    This is example of fetch on-chain world data for recipes

    Returns:
    Optional[Dict]: The world data if successful, None otherwise.
    """
    web3 = Web3(Web3.HTTPProvider(rpc_url))

    if not web3.is_connected():
        print("unable to connect to Ethereum")
        return None

    try:
        world_contract = web3.eth.contract(address=world_contract_address, abi=world_contract_abi)
        
        # Query the world data from the contract
        all_recipes = world_contract.functions.getAllRecipes().call()

        logging.info(f"Recipes: {all_recipes}")
        return world_data
    
    except Exception as e:
        logging.error(f"An error occurred while querying world data: {e}")
        return None

# Generative AI: NFTs using Chainlink Functions
# Verifiable AI: Can use Functions to verify the output of an AI LLM, & get an attestation that the output is correct & what the LLM actually outputted
npc_name = "Brian"
creator_text = "You are a Merchant NPC. You can exchange items, craft items, and do daily check-ins."
user_name = "player"
ask = "<player's request>"  # Replace this with the actual request or dynamically generate it

prompt = f"""
You are {npc_name}, an NPC in an online video game named Voxelverses. {creator_text}
Your messages should be short, personable, and full of puns.
Your messages will display inside of the game with user choices.
In every message enclose two or three short options for player responses in <button> XML tags.
A player named {user_name} will be interacting with you and wants to chit-chat. Make up anything you want.
For context, {user_name} is asking for {ask}.
Start with an opening message for {user_name} that remarks on their ask and explains who you are.
""".strip()

my_agent = HiveAgent(
    name="vv-npc-agent",
    functions=[get_transaction_receipt, query_world_data],
    instruction=prompt,
    config_path=get_config_path("hive_config.toml"),
    retrieve=True,
    required_exts = ['.md'],
    retrieval_tool='chroma'
)
my_agent.run()
