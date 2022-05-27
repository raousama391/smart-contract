// Import path, fs and solc
const path = require("path");
const fs = require("fs");
const solc = require("solc");

// importing the contract in such way that not directly compiled
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

// Telling solidity the contract amount and providing the source code
//solc.compile(source,1)

module.exports = solc.compile(source, 1).contracts[':Inbox'];
