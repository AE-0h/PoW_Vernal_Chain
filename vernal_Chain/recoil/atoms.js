import { atom } from "recoil";

export const p2pNet = atom({
  key: "p2pNet",
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

export const minerSpecs = atom({
  key: "minerSpecs",
  default: {
    difficulty: "3",
    mode: "auto",
    privKey: "57eba6f7286be8c3f494db155f920146956c4beb3bbd0672d6d51679273642a6",
    pubKey: "f55915e63c847b0d86b214b01c08c12cc576ad70f2dde84385613f784644bd3d0",
    address: "cd4afc7d339a9b37f87329977530a7b31055313d",
  },
});

export const faucetSpecs = atom({
    key: "faucetSpecs",
    default: {
      privKey: "ddbca68ab1126e426b7b8c46c9ba5e5db95c5f9652ac69812aadb04e11addcd6",
      pubKey: "93f7540e7394a4b6c88a5a53fd74a1ec84724afa2b90255c94bf22a365bf02230",
      address: "f5cf0c61cc369f3b9ff3115f96c90a640985e5e2",
    },
  });

