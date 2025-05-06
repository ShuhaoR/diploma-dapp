📄 Diploma NFT DApp — README & Developer Guide

🧩 Project Overview

This DApp allows approved issuers to mint and issue NFT diplomas to students using Ethereum's Sepolia testnet. Each diploma is a non-transferable (soulbound) ERC-721 token, with metadata stored on IPFS.

✅ Features Implemented

🔐 Smart Contract — DiplomaNFT.sol

Inherits: ERC721URIStorage, Ownable

Tracks tokenCounter

Role control: Only issuers can mint

Key Functions:

issueDiploma(address student, string memory tokenURI)

approveIssuer(address issuer)

revokeIssuer(address issuer)

_update overridden to prevent transfers (soulbound)

💻 Frontend — React + Vite + Ethers.js

Inputs:

🧍 Student wallet address

🔗 IPFS metadata URI

Button to issue diploma → calls contract function

Confirmation message on success

Fetches and displays:

name, description, image

🌐 Deployment

Contract address: 0x0680E1cfB96a018c5c31E770276cEbb783ae68Bf

Deployed via Hardhat to Sepolia

📦 IPFS Metadata

JSON format includes:

{
  "name": "Diploma Title",
  "description": "Achievement description",
  "image": "https://gateway.pinata.cloud/ipfs/<CID>"
}

Uploaded via Pinata

📚 How to Run the Project

1. 🛠 Backend Setup (Hardhat)

cd Backend
npm install

Compile Contracts:

npx hardhat compile

Deploy to Sepolia:

Edit .env to include:

PRIVATE_KEY=<your-wallet-private-key>
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/<project-id>

Run deployment script:

npx hardhat run scripts/deploy.js --network sepolia

Contract will print the deployed address.

2. ⚛️ Frontend Setup (Vite + React)

cd Frontend
npm install

Add contract artifact:

cp -r ../Backend/artifacts ./

Start the dev server:

npm run dev

Open http://localhost:5173 in browser.

🧪 Test Workflow

Connect MetaMask to Sepolia testnet

Input valid student wallet & metadata URI

Approve transaction in MetaMask

Confirm diploma issuance

Metadata preview rendered if valid

⚠️ Common Issues

❌ IPFS URI invalid: CORS or broken CID

❌ Metadata missing image field

❌ Artifacts missing: ensure artifacts folder exists in Frontend

📁 Project Structure

diploma-dapp/
├── Backend/
│   ├── contracts/
│   │   └── DiplomaNFT.sol
│   ├── scripts/
│   │   └── deploy.js
│   ├── hardhat.config.js
├── Frontend/
│   ├── src/
│   │   └── App.jsx
│   ├── artifacts/

✅ Next Steps



🤝 Repository & Handoff

GitHub: github.com/ShuhaoR/diploma-dapp

Collaborators: Tianfan added

Code split between /Backend and /Frontend

📝 Notes for Tianfan

You’ll need Sepolia ETH from a faucet to deploy/test

Confirm MetaMask is connected to Sepolia

If metadata doesn’t render, double-check IPFS format or CID access

Deployment failures? Ensure you pass the correct constructor args to Ownable

