require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    "local-devnode": {
      url: "http://localhost:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
    "optimistic-kovan": {
      url: "https://kovan.optimism.io",
      accounts: { mnemonic: process.env.MNEMONIC },
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      accounts: { mnemonic: process.env.MNEMONIC },
    },
  },
};
