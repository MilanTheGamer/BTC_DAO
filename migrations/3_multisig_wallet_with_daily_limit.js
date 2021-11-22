const MultiSigWalletWithDailyLimit = artifacts.require(
    "MultiSigWalletWithDailyLimit"
);
const {
    owners,
    requiredConfirmations,
    dailyLimit,
} = require("../config/config");

module.exports = function (deployer) {
    deployer.deploy(
        MultiSigWalletWithDailyLimit,
        owners,
        requiredConfirmations,
        dailyLimit
    );
};
