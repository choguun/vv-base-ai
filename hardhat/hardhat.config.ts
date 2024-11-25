import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import '@oasisprotocol/sapphire-hardhat';
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999,
      },
    },
  },
  networks: {
    hardhat: {
    },
    baseSepolia: {
      url: `https://sepolia.base.org`,
      accounts: [process.env.PRIVATE_KEY as string]
    },
    b2Mainnet: {
      url: "https://rpc.bsquared.network",
      accounts: [process.env.PRIVATE_KEY as string]
    },
    crossfiTestnet: {
      url: "https://testnet-crossfi-evm.konsortech.xyz",
      accounts: [process.env.PRIVATE_KEY as string]
    },
    xrplTestnet: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    taikoTestnet: {
      url: "https://rpc.hekla.taiko.xyz",
      accounts: [process.env.PRIVATE_KEY as string]
    },
    zytronTestnet: {
      url: "https://linea-testnet-zytron.zypher.game",
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  etherscan: {
  },
  sourcify: {
    enabled: false
  }
};

export default config;
