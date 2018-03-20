var ConduitToken = artifacts.require("ConduitToken");


module.exports = function(deployer) {
  deployer.deploy(ConduitToken);
};