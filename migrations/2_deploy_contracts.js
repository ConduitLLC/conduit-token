var ConduitToken = artifacts.require("COND");
var StratTime = 1523170145;
var EndTime = 1524034145;
var ethSenderAddress = "0x6330a553fc93768f612722bb8c2ec78ac90b3bbc";


module.exports = function(deployer) {
  deployer.deploy(ConduitToken,StratTime,EndTime,ethSenderAddress);
};