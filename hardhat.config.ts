import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import '@primitivefi/hardhat-dodoc';

import "./tasks/accounts";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";

dotenvConfig({ path: resolve(__dirname, "./.env") });

// Ensure that we have all the environment variables we need.
const mnemonic: string | undefined = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file");
}

const infuraApiKey: string | undefined = process.env.INFURA_API_KEY;
if (!infuraApiKey) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
}

const chainIds = {
  mainnet: 1,
  polygon: 137,
  bsc: 56,
  hardhat: 31337,
  ropsten: 3,
};

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
  const url: string = "https://" + network + ".infura.io/v3/" + infuraApiKey;
  return {
    accounts: {
      count: 10,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[network],
    url,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      bsc: process.env.BSCSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    currency: "BRL",
    enabled: true,
    excludeContracts: [],
    src: "./contracts",
  },
  dodoc: {
    runOnCompile: false,
    include: [],
    outputDir: "./docs",
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
      chainId: chainIds.hardhat,
    },
    bsc: getChainConfig("bsc"),
    mainnet: getChainConfig("mainnet"),
    polygon: getChainConfig("polygon"),
    ropsten: getChainConfig("ropsten"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.9",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      // Set the optimizer runs to 1 for Immutable X gas testing
      // Set the optimizer runs to max (2 ** 32 - 1) for the other gas tests
      
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      // https://ethereum.stackexchange.com/questions/99971/what-does-enable-optimization-mean-in-remix-and-what-does-it-do
      optimizer: {
        enabled: true,
        runs: 2 ** 32 - 1,
      },
    },
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;
