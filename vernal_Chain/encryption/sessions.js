const hashes = require ("jshashes");

export const saveKeysInSession = (keyPair) => {
  sessionStorage.privKey = keyPair.getPrivate().toString(16);
  let pubKey =
    keyPair.getPublic().getX().toString(16) +
    (keyPair.getPublic().getY().isOdd() ? "1" : "0");
  sessionStorage.pubKey = pubKey;
  let ripemd160 = new hashes.RMD160();
  sessionStorage.address = ripemd160.hex(pubKey);

};

export const getKeysFromSession = () => {
  let privKey = sessionStorage.privKey;
  let pubKey = sessionStorage.pubKey;
  let address = sessionStorage.address;
  return { privKey, pubKey, address };
}

export const deleteKeysFromSession = () => {
  sessionStorage.removeItem("privKey");
  sessionStorage.removeItem("pubKey");
  sessionStorage.removeItem("address");
}

export const saveKeysInLocalStorage = (keyPair) => {
  localStorage.privKey = keyPair.getPrivate().toString(16);
  let pubKey =
    keyPair.getPublic().getX().toString(16) +
    (keyPair.getPublic().getY().isOdd() ? "1" : "0");
  localStorage.pubKey = pubKey;
  let ripemd160 = new hashes.RMD160();
  localStorage.address = ripemd160.hex(pubKey);
}

