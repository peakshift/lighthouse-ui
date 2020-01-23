# UX Research

## lighthouse (cli) setup mac steps
### Requirements

#### Command Line Tools for Xcode

- Go to https://developer.apple.com/downloads/
- Sign in and search for "Command Line Tools"
- Download and install

#### Startup

```json
// ETH1 Genesis Block
{
    "config": {
        "chainId": 15,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "nonce": "0x0000000000000042",
    "timestamp": "0x0",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "gasLimit": "0x8000000",
    "difficulty": "0x400",
    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "coinbase": "0x3333333333333333333333333333333333333333",
    "alloc": {}
}
```



```bash
## DevMode
# Start local Geth/Parity Ethereum POA
geth --goerli --rpc --rpcaddr "0.0.0.0" --rpcvhosts=*
# Deploy deposit contract
truffle deploy
# Start beacon chain
lighthouse \
  beacon_node \
  --eth1-endpoint $VOTING_ETH1_NODE \
  --network-dir /root/network \
  --http \
  --http-address 0.0.0.0 \
  --ws \
  --ws-address 0.0.0.0 \
  --eth1
# start validator
lighthouse validator --server http://beacon_node:5052
```

# Proposal — Accessiblity

*Our proposal is to make lighthouse and Eth2.0 more accessiable — it goes outside of the scope of the RFP as the goal is to form an ongoing and open collaboration even after this project is finalised on the business side.*

**Current State of Lighthouse UX**

Lighthouse is under heavy development and as the Eth2.0 protocol still faces frequent changes — we take into consideration we understand that "we are working on shaky grounds".

That being said there are several points we need to hit in order to provide a good overall user experience towards adoption of lighthouse / access and usability of the Eth2.0 network. I would categorise these efforts under Developer Experience and Operator Tooling. I belilve these initiatives can/should be worked on in parallel.

- Local Dev Mode (Phase 0)
  - Quick Setup for those wanting to start interacting with the Becaon Chain + Validator APIs locally
- Launch new Private Network
  - Experince the Beacon Chain and Validators in a sandbox environment.
- Join the Lighthosue Public Testnet
  - In order to participate in the testing of the protocol implementation at Phase 0

---

### 🌊 ⚓️ 🦑
*Personally, I think we missed a great branding opportunity with the naming of releases after lighthouses and maritime things.* 

...

We know that Rust is a language you can trust a system like Eth2.0 to be written in, there are lighthouses still stand strongly even while being battered. They stand securly as beacons* towards safety...

*Make Lighthouses Great Again!*

When we start testing for client interopabiltiy — Growing the Lighthouse Public testnet from now is going to be a fundimental.

Implementations in more "sexy", shinny and and user friendly languages — and have seen growth in contributors and testnet tooling. 

*Lets make Lighthouse sexy again!*

---

A Lighthouse UI to manage validators and monitor the beacon-chain is proposed and is currently open in the bidding process.

### Beacon Chain

- Connect to a Beacon Chain

### Validator

- Create a Validator
  - Deposits through a Web3 Browser
- Connect a Validator
- Validator Actions
  - Start
  - Fund
  - Stop
    - Warn/Confirm
  - Exit Voluntarily
  - Widthdraw Earnings
  - Remove (from UI)
- Validator Observe Modes
  - Exit Timeline
  - System Status
  - Account
      - Earnings
      - Balance
  - Connected Peers

UX Related Issues (lighthouse repo)

- https://github.com/sigp/lighthouse/issues/815
- https://github.com/sigp/lighthouse/issues/576

References

- Validator lifecycle — https://notes.ethereum.org/@hww/lifecycle


### Sitemap
* Status
    * Error handling
    * Disk usage
    * Network bandwidth
    * CPU usage
    * Beacon status - /status/beacon_node
* Validators - Actions
    * Status
        * Unfunded
        * Ready
        * Running
        * Stopped
        * In Committee
    * Create new validator - POST /validators
        * Input Session-key (stored until the session expires) - inputed to connect and access the validator client
    * List of validators - GET /validators - A list of validators, their recent past, current and future duties. Session-keys retrieved from localStorage
        * Remove validator - POST /validators/<pubkey>/remove
        * Stop validator - POST /validators/<pubkey>/stop
        * Start validator - POST /validators/<pubkey>/start
        * Withdraw validator - POST /validators/<pubkey>/withdraw
        * Exit validator - POST /validators/<pubkey>/exit
    * Deposit  ETH
        * Min 32 ETH
        * Sign Transaction
        * Send Transaction
        * Transaction Confirmation
    * Settings
    * Logs

#### Endpoints
```
/beacon/head
/beacon/heads
/beacon/block_root
/beacon/block
/beacon/state_root
/beacon/state
/beacon/validators
/beacon/validators/all
/beacon/validators/active
/beacon/committees
/validator/duties
/validator/duties/all
/validator/duties/active
/consensus/global_votes
/consensus/individual_votes
/network/peers
/network/peer_id
/network/enr
```


#### Stack
* react
* react-browser
* recharts
* styled-components
* fontawesome
* flux
* websockets
* ethers-js


### Notes
Ability to submit deposits to the Eth1 deposit contract via the  [MetaMask](https://metamask.io/)  browser extension
  - Working within Electron this will require its own of key management system

Questions
  - Will the interface include an account manager?
    - No since we’re using meta mask.
  - Do beacon nodes need a privateKey?
  - Is the primary user interested in using lighthouse ui to inspect global state or only the state of their own node?
  - Why does SigmaPrime want to build their own UI for Shasper (Eth2.0)
  - When is the TestNet going to be launched?
  - Why is MetaMask a requirement?
    - limitation = single mnemonic, node operator has to export private keys from mnemonic losing track of the derivation path
  - How are accounts created in lighthouse-cli ? does it use mnemonics or private keys (hex)
  - Do validators want to store their private keys in meta mask?
  - Who is this the primary target user of the lighthouse-ui?
  - Given a user has multiple validators : multiple private keys (mnemonics)
    - Each key will have to be added to MetaMask in order  perform write actions when the validator s selected.
    - How might we correctly select the account for signing the transactions for a specific validator
    - Accounts will have to be switched after 
Other Question
  - What is Sigma Primes goals for lighthouse?
  - What role does Sigma Prime in-vision lighthouse to have in the Eth2.0 ecosystem?  


#### Bidding process  
* Upon reception of this Request for Proposal, vendors are expected to confirm receipt and intention to bid on the engagement.
* Proposals must be returned by bidders before January 31st, 2020 9pm AEST.
* Proposals must be sent in PDF format to the following email address:  [rfp@sigmaprime.io](mailto:rfp@sigmaprime.io) 
* [This PGP key](https://keybase.io/sigp/pgp_keys.asc?fingerprint=dcf37e025d6c9d42ea795b119e7c6cf9988604be)  can be used to encrypt the proposal (*optional*).
* Vendors can request more information via email ( [security@sigmaprime.io](mailto:rfp@sigmaprime.io) ). Pre-bid meetings with vendors can also be arranged if required.


