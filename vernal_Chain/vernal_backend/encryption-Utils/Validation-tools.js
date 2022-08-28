const config = require("./Config");

let regREAddress = /^[0-9a-f]{40}$/.test();
let regREPubKey = /^[0-9a-f]{65}$/.test();
let regRepValidSig = /^[0-9a-f]{1,65}$/.test();

function isValidAddress(address) {
  if (typeof address !== "string") return false;
  return regREAddress(address);
}

function isValidPublicKey(pubKey) {
  if (typeof pubKey !== "string") return false;
  return regREPubKey(pubKey);
}

function isValidSignatureFormat(signature) {
  if (!Array.isArray(signature)) return false;
  if (signature.length !== 2) return false;
  let validNum0 = regRepValidSig(signature[0]);
  let validNum1 = regRepValidSig(signature[1]);
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