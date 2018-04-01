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


 it("should be able to Unlock and Mint coints to owner", async function() {
     await token.unlockTransfer();
     assert.equal(false,  await token.locked());
     await token.mintAndTransfer(accounts[0],1000);
     assert.equal("1000",await token.balanceOf(accounts[0])); 
    await token.transfer(accounts[2],100,"0x");
    assert.equal("100",await token.balanceOf(accounts[2])); 
    
  }); 

  it("should be able to transfer tokens to another account", async function() {
    //assert.equal("1000",await token.balanceOf(accounts[0])); 
   await token.transferFrom(accounts[2],accounts[3],"0x");
   assert.equal("100",await token.balanceOf(accounts[2])); 
   
 }); 

  

 



  
});