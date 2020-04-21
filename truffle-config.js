module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      // gas: 500000,
      network_id: "5777" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.4.23"
    }
  }
};
