const Block = require("../vernalChain/block");
const Transaction = require("../vernalChain/transaction");
const CryptoUtils = require("./Encryption-tools");

const faucetPrivateKey =
 "ddbca68ab1126e426b7b8c46c9ba5e5db95c5f9652ac69812aadb04e11addcd6";
const faucetPublicKey = CryptoUtils.privateKeyToPublicKey(faucetPrivateKey);
const faucetAddress = CryptoUtils.publicKeyToAddress(faucetPublicKey);

const minerPrivateKey =
  "57eba6f7286be8c3f494db155f920146956c4beb3bbd0672d6d51679273642a6";
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