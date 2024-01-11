const ethers = require("ethers");
const fs = require("fs-extra")

async function main() {

    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');
    const wallet = new ethers.Wallet("0x454e399caa58370d10119353ef89f3ac13224fc822aa36ad8ee4be6baa06b076", provider)

    const abi = fs.readFileSync("./out/SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const bin = fs.readFileSync("./out/SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    console.log("Deploying contract....")
    const contract = await contractFactory.deploy();
    console.log(contract)

}


main().then(() => process.exit(0)).catch((e) => {
    console.log(e)
})