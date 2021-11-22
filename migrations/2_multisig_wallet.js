const MultiSigWallet = artifacts.require("MultiSigWallet");
const { owners, requiredConfirmations } = require("../config/config");

module.exports = function (deployer) {
    deployer.deploy(MultiSigWallet, owners, requiredConfirmations);
};
