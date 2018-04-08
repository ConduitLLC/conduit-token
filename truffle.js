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
      from: "0x383c2ddd5d73da0e5086188ee8bc58a671f0f18b",
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
