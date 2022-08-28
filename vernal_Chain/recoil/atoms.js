import { atom } from "recoil";

export const nodeList = atom({
  key: "nodeList",
  default: ["http://localhost:3002"],
});

export const defaultNode = atom({
  key: "vernalChainNode",
  default: "http://localhost:3002",
});

export const walletState = atom({
    key: "walletState",
    default: "locked",
  });

export const address = atom({
  key: "address",
  default: "",
});

export const faucetDetails = atom({
    key: "faucet",
    default: {
      privKey: "c30331146ab8cd77fad2662019a8bc9029fe8610efdedb4aaee8f85ad4feb356",
      pubKey: "44997ff666ac720d52067e8bd244bd60873b8fb35eb9cfcda99faf60e4c4deea0",
      address: "b554c373f2544e21f54e6a038c472a3f1de79930",
    },
  });

