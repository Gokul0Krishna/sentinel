const { ethers } = require("hardhat");
async function main() {
  const Registry = await ethers.getContractFactory("OperationsRegistry");
  const registry = await Registry.deploy();
  await registry.waitForDeployment();
  const address = await registry.getAddress();
  console.log(`OperationsRegistry deployed: ${address}`);
  console.log(`Explorer: https://explorer-mezame.shardeum.org/address/${address}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
