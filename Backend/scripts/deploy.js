const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const DiplomaNFT = await hre.ethers.getContractFactory("DiplomaNFT");

  // Deploy with constructor arg: deployer.address
  const contract = await DiplomaNFT.deploy(deployer.address);

  // Wait for deployment confirmation (Ethers v6+)
  await contract.waitForDeployment();

  console.log("✅ DiplomaNFT deployed to:", contract.target); // Ethers v6 uses `target`
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
