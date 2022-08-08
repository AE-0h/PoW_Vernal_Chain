const express = require("express");
const Blockchain = require("../vernalChain/_vernalChain");
const port = process.argv[2];
const rp = require("request-promise");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const { json } = require("express");

const vernalChain = new Blockchain();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

/**
 * @notice - Displays statistics about the node
 */
app.get("/info", (req, res) => {
    res.json({
        about: "WELCOME TO THE EGG MASS 🥚🥚🥚",
        nodeUrl: vernalChain.currentNodeUrl,
        peers: vernalChain.networkNodes.length,
        difficulty: vernalChain.difficulty,
        blocks: vernalChain.chain.length,
        chainId: vernalChain.chain[0].blockHash,
        cumulativeDifficulty: vernalChain.calcCumulativeDifficulty(),
        confirmedTransactions: vernalChain.getConfirmedTransactions().length,
        pendingTransactions: vernalChain.pendingTransactions.length,
    });
});

/**
 *  Displays all addresses in the node
 */
app.get("/addresses", (req, res) => {
    let allAddresses = vernalChain.getAllAddresses();
    res.json(allAddresses);
    console.log(allAddresses);
});

//========================= Transactions =========================

/**
 * @notice - Displays the transaction history of a specific address
 * @param address - Address of a wallet
 */
app.get("/address/:address/transactions", (req, res) => {
    let address = req.params.address;
    let tranHistory = vernalChain.getTransactionHistory(address);
    res.json(tranHistory);
    console.log(tranHistory);
});

/**
 * @dev -  https://www.npmjs.com/package/http-status-codes
 * @notice - Displays the balance of a specific address
 * @param address - Address of a wallet
 */
app.get("/address/:address/balance", (req, res) => {
    let address = req.params.address;
    let balance = vernalChain.getAccountBalance(address);
    if (balance.errorMsg) res.status(StatusCodes.NOT_FOUND);
    res.json(balance);
    console.log(balance);
});

// adds a transaction to a nodes pending transactions
app.post("/transaction", function(req, res) {
    const newTransaction = req.body;
    const blockIndex =
        vernalChain.addTransactionToPendingTransactions(newTransaction);
    res.json({
        message: `Transaction will be added in block ${blockIndex}`,
    });
});

// creates a new transaction
app.post("/transaction/broadcast", function(req, res) {
    const newTransaction = vernalChain.addTransaction(req.body);
    console.log(newTransaction);
    if (newTransaction.errorMsg) {
        res.json({ error: newTransaction.errorMsg });
        return;
    }
    // vernalChain.addTransactionToPendingTransactions(newTransaction);

    if (newTransaction.transactionDataHash) {
        // Added a new pending transaction --> broadcast it to all known peers

        const requestPromises = [];
        vernalChain.networkNodes.forEach((node) => {
            const requestOptions = {
                uri: `${node}/transaction`,
                method: "POST",
                body: newTransaction,
                json: true,
            };

            requestPromises.push(rp(requestOptions));
        });

        Promise.all(requestPromises)
            .then(() =>
                res.json({
                    message: "Transaction created and broadcasted",
                    transactionDataHash: newTransaction.transactionDataHash,
                })
            )
            .catch((err) => res.status(400).json({ error: err.message }));
    } else res.status(StatusCodes.BAD_REQUEST).json(newTransaction);
});

//========================= Mining =========================
app.post("/mine-next-block", function(req, res) {
    const { minerAddress, difficulty } = req.body;
    const newBlock = vernalChain.mineNextBlock(minerAddress, difficulty);

    // broadcast the new block to other nodes
    const requestPromises = [];
    vernalChain.networkNodes.forEach((node) => {
        const requestOptions = {
            uri: `${node}/receive-new-block`,
            method: "POST",
            body: { newBlock },
            json: true,
        };

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises)
        .then(() => {
            res.json({
                message: "New block mined and broadcasted successfully",
                block: newBlock,
            });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/receive-new-block", function(req, res) {
    const block = vernalChain.extendChain(req.body.newBlock);
    if (!block.errorMsg) {
        res.json({
            message: "New block received and accepted",
            block,
        });
    } else {
        res.json({
            message: "New block rejected",
            block,
        });
    }
});

/*  =========================  Nodes ========================= */

app.post("/register-and-broadcast-node", function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;

    if (vernalChain.networkNodes.indexOf(newNodeUrl) == -1) {
        vernalChain.networkNodes.push(newNodeUrl);
    }

    const regNodesPromises = [];
    vernalChain.networkNodes.forEach((networkNodesUrl) => {
        const requestOptions = {
            uri: networkNodesUrl + "/register-node",
            method: "POST",
            body: { newNodeUrl: newNodeUrl },
            json: true,
        };

        regNodesPromises.push(rp(requestOptions));
    });

    Promise.all(regNodesPromises)
        .then((data) => {
            const bulkRegisterOptions = {
                uri: newNodeUrl + "/register-nodes-bulk",
                method: "POST",
                body: {
                    allNetworkNodes: [
                        ...vernalChain.networkNodes,
                        vernalChain.currentNodeUrl,
                    ],
                    pendingTransactions: vernalChain.pendingTransactions,
                },
                json: true,
            };

            return rp(bulkRegisterOptions);
        })
        .then((data) => {
            res.json({
                message: "New node registered with network successfully",
            });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/register-node", function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    const nodeNotAlreadyPresent =
        vernalChain.networkNodes.indexOf(newNodeUrl) == -1;
    const notCurrentNode = vernalChain.currentNodeUrl !== newNodeUrl;
    if (nodeNotAlreadyPresent && notCurrentNode)
        vernalChain.networkNodes.push(newNodeUrl);
    res.json({
        message: "New node registered successfully",
    });
});

app.post("/register-nodes-bulk", function(req, res) {
    const allNetworkNodes = req.body.allNetworkNodes;
    const pendingTransactions = req.body.pendingTransactions;

    allNetworkNodes.forEach((networkNodesUrl) => {
        const nodeNotAlreadyPresent =
            vernalChain.networkNodes.indexOf(networkNodesUrl) == -1;
        const notCurrentNode = vernalChain.currentNodeUrl !== networkNodesUrl;
        if (nodeNotAlreadyPresent && notCurrentNode)
            vernalChain.networkNodes.push(networkNodesUrl);
    });
    // update pending transactions
    vernalChain.pendingTransactions = pendingTransactions;
    res.json({
        message: "Bulk registration successful",
    });
});

/**  ========================= Unregister Nodes =========================
 * Step 1) A new node will call the /register-and-broadcast-node endpoint of an existing node.
 * That node will be broadcasted to all other nodes and removed from the network.
 * Step 2) The current node will initate then remove the old node from its database.
 */
app.post("/unregister-and-broadcast-node", function(req, res) {
    const oldNodeURL = req.body.oldNodeURL;

    // Step 1)
    const removeNodePromise = [];
    vernalChain.networkNodes.forEach((networkNodesUrl) => {
        const requestOptions = {
            uri: networkNodesUrl + "/unregister-node",
            method: "POST",
            body: { oldNodeURL: oldNodeURL },
            json: true,
        };

        removeNodePromise.push(rp(requestOptions));
    });

    // Step 2)
    Promise.all(removeNodePromise)
        .then(() => {
            if (vernalChain.networkNodes.includes(oldNodeURL)) {
                vernalChain.networkNodes = vernalChain.networkNodes.filter(
                    (node) => node !== oldNodeURL
                );
            }

            res.json({
                message: "Node removed from network successfully",
            });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/unregister-node", function(req, res) {
    if (vernalChain.currentNodeUrl === req.body.oldNodeURL) {
        vernalChain.networkNodes = [];
    } else {
        const oldNodeURL = req.body.oldNodeURL;
        vernalChain.networkNodes = vernalChain.networkNodes.filter(
            (node) => node !== oldNodeURL
        );
    }
    // update pending transactions
    vernalChain.pendingTransactions = [];
    res.json({
        message: "Node removed successfully",
    });
});

//========================= Consensus =========================

// Used to correct the chain if a node has the wrong chain data.
app.get("/consensus", function(req, res) {
    const requestPromises = [];

    // get all network nodes and make a request to each one
    vernalChain.networkNodes.forEach((networkNodesUrl) => {
        const requestOptions = {
            uri: networkNodesUrl + "/blockchain",
            method: "GET",
            json: true,
        };

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises)
        .then((blockchains) => {
            // check if the length of the blockchains is greater than our current node blockchain
            const currentChainLength = vernalChain.chain.length;
            let maxChainLength = currentChainLength;
            let newLongestChain = null;
            let newPendingTransactions = null;

            blockchains.forEach((blockchain) => {
                if (blockchain.chain.length > maxChainLength) {
                    maxChainLength = blockchain.chain.length;
                    newLongestChain = blockchain.chain;
                    newPendingTransactions = blockchain.pendingTransactions;
                }
            });

            if (!newLongestChain
                // (newLongestChain && !vernalChain.chainIsValid(newLongestChain))
            ) {
                res.json({
                    message: "Current chain has not been replaced",
                    chain: vernalChain.chain,
                });
            } else {
                vernalChain.chain = newLongestChain;
                vernalChain.pendingTransactions = newPendingTransactions;
                res.json({
                    message: "This chain has been replaced",
                    chain: vernalChain.chain,
                });
            }
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

//========================= Block Explorer =========================
app.get("/blockchain", function(req, res) {
    res.send(vernalChain);
});

app.get("/block/:blockHash", (req, res) => {
    const blockHash = req.params.blockHash;
    const correctBlock = vernalChain.getBlock(blockHash);
    res.json({ block: correctBlock });
});

app.get("/blockByIndex/:index", (req, res) => {
    const blockIndex = req.params.blockIndex;
    const correctBlock = vernalChain.getBlockByIndex(blockIndex);
    res.json({ block: correctBlock });
});

app.get("/block/:blockHash/transactions", (req, res) => {
    const blockHash = req.params.blockHash;
    const correctBlock = vernalChain.getBlockTransactions(blockHash);
    res.json({ trans: correctBlock });
});

app.get("/transaction/:transactionHash", (req, res) => {
    const transactionHash = req.params.transactionHash;
    const transactionData = vernalChain.getTransaction(transactionHash);
    res.json({ transaction: transactionData });
});

app.get("/address/:address", (req, res) => {
    const address = req.params.address;
    const addressData = vernalChain.getAddressData(address);
    res.json({ addressData: addressData });
});

app.get("/all-transactions", function(req, res) {
    res.json(vernalChain.getAllTransactions());
});

app.get("/all-pending-transactions", function(req, res) {
    res.json(vernalChain.pendingTransactions);
});
//========================= Server =========================
app.listen(port, function() {
    console.log(`⚙️🦎⚙️ Listening on port ${port}🥚🥚🥚`);
});