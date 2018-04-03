var CondToken = artifacts.require("COND");

contract('CondToken', async function(accounts) {
  var eth = web3.eth;

  var token, account;

  before( async function() {
    token = await CondToken.deployed();
    account = accounts[0];
  });

  it("should have token details set", async function() {
    assert.equal(await token.name(), 'Conduit token');
    assert.equal(await token.symbol(), 'COND');
    assert.equal(await token.decimals(), 18);
  });

  it("to check if sale is running", async function() {
    assert.equal(true,  await token.isSaleRunning());
    
  });


  it("to check if address is already whitelisted", async function() {
    assert.equal(false, await token.isWhiteListed(accounts[0]));
 }); 

 it("to add account in whitelist", async function() {
    await token.enableWhitelist(accounts[0])
    assert.equal(true, await token.isWhiteListed(accounts[0]));
 }); 

 it("to remove an account in whitelist", async function() {
    await token.disableWhitelist(accounts[0])
    assert.equal(false, await token.isWhiteListed(accounts[0]));
 }); 

 it("should be able to Unlock and Mint coints to owner", async function() {
     await token.unlockTransfer();
     assert.equal(false,  await token.locked());
     await token.enableWhitelist(accounts[0]);
     assert.equal(true, await token.isWhiteListed(accounts[0]));
     await token.mintAndTransfer(accounts[0],1000);
     assert.equal("1000",await token.balanceOf(accounts[0])); 
  }); 

  it("should be able to transfer to another account", async function() {
    assert.equal("1000",await token.balanceOf(accounts[0])); 
    await token.enableWhitelist(accounts[2]);
    await token.transfer(accounts[2],100,"0x");
    assert.equal("100",await token.balanceOf(accounts[2])); 
    assert.equal("900",await token.balanceOf(accounts[0])); 
 }); 

  /*it("should be able to approve sender allowance ", async function() {
   assert.equal("0",await token.allowance(accounts[0],accounts[5]));
   assert.equal("100",await token.balanceOf(accounts[5])); 
   await token.approve(accounts[5],50);
   assert.equal("50",await token.allowance(accounts[0],accounts[5]));
   await token.transferFrom(accounts[5],accounts[6],10);
  // assert.equal("910",await token.balanceOf(accounts[0])); 
 }); */

  

 



  
});