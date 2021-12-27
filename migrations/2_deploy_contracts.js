const DeyxysToken = artifacts.require("DeyxysToken");
const DeyxysTokenSale = artifacts.require("DeyxysTokenSale");

module.exports = function (deployer) {
    const initialSupply = 100000000;
    var tokenPrice = 100000000000000; // in wei = 0.0001 eth

    deployer.deploy(DeyxysToken, initialSupply).then(function(){
        return deployer.deploy(DeyxysTokenSale, DeyxysToken.address, tokenPrice);
    });
};
