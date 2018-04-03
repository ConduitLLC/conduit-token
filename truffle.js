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
      from: "0x6d4cf629a44187abca11c8a6dfff6321eaddbfc5",
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
