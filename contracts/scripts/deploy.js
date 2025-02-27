const { ethers } = require("hardhat");

async function main() {
    const MedicalRecords = await ethers.getContractFactory("MedicalRecords");
    const contract = await MedicalRecords.deploy();

    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
