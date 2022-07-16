const config = require("./Config");

function isValidAddress(address) {
  if (typeof address !== "string") return false;
  return /^[0-9a-f]{40}$/.test(address);
}

function isValidPublicKey(pubKey) {
  if (typeof pubKey !== "string") return false;
  return /^[0-9a-f]{65}$/.test(pubKey);
}

function isValidSignatureFormat(signature) {
  if (!Array.isArray(signature)) return false;
  if (signature.length !== 2) return false;
  let validNum0 = /^[0-9a-f]{1,65}$/.test(signature[0]);
  let validNum1 = /^[0-9a-f]{1,65}$/.test(signature[1]);
  return validNum0 && validNum1;
}

function isValidDifficulty(blockHash, difficulty) {
  for (let i = 0; i < difficulty; i++) if (blockHash[i] !== "0") return false;
  return true;
}

module.exports = {
  isValidAddress,
  isValidPublicKey,
  isValidSignatureFormat,
  isValidDifficulty,
};