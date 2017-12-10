var ConvertLib = artifacts.require("./ConvertLib.sol");
var TheBlockchainHubCommunityToken = artifacts.require("./TheBlockchainHubCommunityToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, TheBlockchainHubCommunityToken);
  deployer.deploy(TheBlockchainHubCommunityToken);
};
