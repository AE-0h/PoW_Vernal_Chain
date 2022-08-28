const Block = require("../vernalChain/block");
const Transaction = require("../vernalChain/transaction");
const CryptoUtils = require("./Encryption-tools");

const faucetPrivateKey =
  "daa00edde3309cd552fdab8099c0887c15e7cab78401c17f863b14a6fd6980e6";
const faucetPublicKey = CryptoUtils.privateKeyToPublicKey(faucetPrivateKey);
const faucetAddress = CryptoUtils.publicKeyToAddress(faucetPublicKey);

const minerPrivateKey =
  "b86e3088b8dfbe9a667caddd42357b9953b0d1fdd5009c1c2a2f9ea793b781dc";
const minerPublicKey = CryptoUtils.privateKeyToPublicKey(faucetPrivateKey);
const minerAddress = CryptoUtils.publicKeyToAddress(faucetPublicKey);

const nullAddress = "0000000000000000000000000000000000000000";
const nullPubKey =
  "00000000000000000000000000000000000000000000000000000000000000000";
const nullSignature = [
  "00000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000000000000000000",
];
const blockReward = 50000;

const genesisDate = "2022-07-01T00:00:00.000Z";
const genesisFaucetTransaction = new Transaction(
  nullAddress, // from address
  faucetAddress, // to Address
  1000000000000, // value of transfer
  0, // fee for mining
  genesisDate, // dateCreated
  "genesis tx", // data (payload)
  nullPubKey, // senderPubKey
  undefined, // transactionDataHash
  nullSignature, // senderSignature
  0, // minedInBlockIndex
  true // transferSuccessful
);


const genesisBlock = new Block(
  0, // block index
  [genesisFaucetTransaction], // transactions array
  0, // currentDifficulty
  undefined, // previous block hash
  minerAddress, // mined by (address)
  undefined, // block data hash
  0, // nonce
  genesisDate, // date created
  undefined, // block hash
  0 // mining reward
);

module.exports = {
  defaultServerHost: "localhost",
  defaultServerPort: 3002,
  faucetPrivateKey,
  faucetPublicKey,
  faucetAddress,
  minerPrivateKey,
  minerPublicKey,
  minerAddress,
  nullAddress,
  nullPubKey,
  nullSignature,
  startDifficulty: 5,
  minTransactionFee: 10,
  maxTransactionFee: 1000000,
  blockReward,
  maxTransferValue: 10000000000000,
  safeConfirmCount: 3,
  genesisBlock,
};