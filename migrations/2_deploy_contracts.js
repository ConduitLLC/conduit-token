var ConduitToken = artifacts.require("COND");
var StratTime = 1522671125;
var EndTime = 1522843925;
var ethSenderAddress = "0x6330a553fc93768f612722bb8c2ec78ac90b3bbc";


module.exports = function(deployer) {
  deployer.deploy(ConduitToken,StratTime,EndTime,ethSenderAddress);
};