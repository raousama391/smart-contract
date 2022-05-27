const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let fetchedAccounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  fetchedAccounts = await web3.eth.getAccounts();

  // Use one of those account to deploy
  // Our contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi There!"] })
    .send({ from: fetchedAccounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("Deploys our contract", () => {
    assert.ok(inbox.options.address);
  });

  it("Has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Hi There!");
  });
});
