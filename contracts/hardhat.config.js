// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// // module.exports = {
// //   solidity: "0.8.28",
// // };
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    polygonMumbai: {
      url: "https://polygon-mainnet.infura.io/v3/742eeefce7c94d94a090e98575d5376b",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
