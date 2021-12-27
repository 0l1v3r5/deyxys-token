module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 4,
      gas: 4700000
    }
  },
  compilers: {
    solc: {
      version: ">=0.6.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
};