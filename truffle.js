module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas:   4700036,
      from: "0x9dc0d2d30e6c059e5e50fa24619fec89a066dedf",
      network_id: "*" // Match any network id
    },
     ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   4700036
}
  },
   rpc: {
 host: 'localhost',
 post:8080
   }
};
