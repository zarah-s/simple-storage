const ethers = require("ethers");
const fs = require("fs-extra")
require("dotenv").config()
async function main() {

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const abi = fs.readFileSync("./out/SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const bin = fs.readFileSync("./out/SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    // console.log("Deploying contract....")
    const contract = await contractFactory.deploy();

    const favouriteNum = await contract.retrieve()
    console.log(favouriteNum.toString())
    // const contractReceipts = await contract.deploymentTransaction().wait(1)
    // console.log(contractReceipts)
    // const nonce = await wallet.getNonce()
    // const tx = {
    //     nonce,
    //     // gasPrice: 20000000000,
    //     // gasLimit: 1000000,
    //     to: null,
    //     value: 0,
    //     data: "0x60806040526040518060400160405280601781526020016040518060400160405280600381526020017f736466000000000000000000000000000000000000000000000000000000000081525081525060015f820151815f01556020820151816001019081620000709190620002ea565b5050503480156200007f575f80fd5b50620003ce565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200010257607f821691505b602082108103620001185762000117620000bd565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200017c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200013f565b6200018886836200013f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620001d2620001cc620001c684620001a0565b620001a9565b620001a0565b9050919050565b5f819050919050565b620001ed83620001b2565b62000205620001fc82620001d9565b8484546200014b565b825550505050565b5f90565b6200021b6200020d565b62000228818484620001e2565b505050565b5b818110156200024f57620002435f8262000211565b6001810190506200022e565b5050565b601f8211156200029e5762000268816200011e565b620002738462000130565b8101602085101562000283578190505b6200029b620002928562000130565b8301826200022d565b50505b505050565b5f82821c905092915050565b5f620002c05f1984600802620002a3565b1980831691505092915050565b5f620002da8383620002af565b9150826002028217905092915050565b620002f58262000086565b67ffffffffffffffff81111562000311576200031062000090565b5b6200031d8254620000ea565b6200032a82828562000253565b5f60209050601f83116001811462000360575f84156200034b578287015190505b620003578582620002cd565b865550620003c6565b601f19841662000370866200011e565b5f5b82811015620003995784890151825560018201915060208501945060208101905062000372565b86831015620003b95784890151620003b5601f891682620002af565b8355505b6001600288020188555050505b505050505050565b6114b180620003dc5f395ff3fe608060405234801561000f575f80fd5b50600436106100b2575f3560e01c80639161ceda1161006f5780639161ceda1461017d5780639e7a13ad14610199578063b2ac62ef146101ca578063b6339418146101fc578063c2c32b6414610218578063cb8780be14610248576100b2565b80630b1e7f83146100b65780632e64cec1146100e8578063305611001461010657806343ede4ae146101245780636f760f411461014257806377ec2b551461015e575b5f80fd5b6100d060048036038101906100cb9190610aba565b610252565b6040516100df93929190610b7e565b60405180910390f35b6100f0610393565b6040516100fd9190610bc1565b60405180910390f35b61010e6103bd565b60405161011b9190610d40565b60405180910390f35b61012c610547565b6040516101399190610bc1565b60405180910390f35b61015c60048036038101906101579190610e8c565b61054c565b005b6101666105ad565b604051610174929190610ee6565b60405180910390f35b61019760048036038101906101929190610f14565b610644565b005b6101b360048036038101906101ae9190610aba565b61071d565b6040516101c1929190610ee6565b60405180910390f35b6101e460048036038101906101df9190610f9c565b6107d2565b6040516101f393929190610b7e565b60405180910390f35b61021660048036038101906102119190610aba565b61091c565b005b610232600480360381019061022d9190610fe3565b610925565b60405161023f9190611059565b60405180910390f35b6102506109fb565b005b60048181548110610261575f80fd5b905f5260205f2090600302015f91509050805f018054610280906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546102ac906110a6565b80156102f75780601f106102ce576101008083540402835291602001916102f7565b820191905f5260205f20905b8154815290600101906020018083116102da57829003601f168201915b50505050509080600101805461030c906110a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610338906110a6565b80156103835780601f1061035a57610100808354040283529160200191610383565b820191905f5260205f20905b81548152906001019060200180831161036657829003601f168201915b5050505050908060020154905083565b5f60045f815481106103a8576103a76110d6565b5b905f5260205f20906003020160020154905090565b60605f6004805480602002602001604051908101604052809291908181526020015f905b8282101561053a578382905f5260205f2090600302016040518060600160405290815f82018054610411906110a6565b80601f016020809104026020016040519081016040528092919081815260200182805461043d906110a6565b80156104885780601f1061045f57610100808354040283529160200191610488565b820191905f5260205f20905b81548152906001019060200180831161046b57829003601f168201915b505050505081526020016001820180546104a1906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546104cd906110a6565b80156105185780601f106104ef57610100808354040283529160200191610518565b820191905f5260205f20905b8154815290600101906020018083116104fb57829003601f168201915b50505050508152602001600282015481525050815260200190600101906103e1565b5050505090508091505090565b5f5481565b6005604051806040016040528083815260200184815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015560208201518160010190816105a691906112a0565b5050505050565b6001805f0154908060010180546105c3906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546105ef906110a6565b801561063a5780601f106106115761010080835404028352916020019161063a565b820191905f5260205f20905b81548152906001019060200180831161061d57829003601f168201915b5050505050905082565b5f6040518060600160405280858152602001848152602001838152509050600481908060018154018082558091505060019003905f5260205f2090600302015f909190919091505f820151815f01908161069e91906112a0565b5060208201518160010190816106b491906112a0565b50604082015181600201555050806006856040516106d291906113a9565b90815260200160405180910390205f820151815f0190816106f391906112a0565b50602082015181600101908161070991906112a0565b506040820151816002015590505050505050565b6005818154811061072c575f80fd5b905f5260205f2090600202015f91509050805f015490806001018054610751906110a6565b80601f016020809104026020016040519081016040528092919081815260200182805461077d906110a6565b80156107c85780601f1061079f576101008083540402835291602001916107c8565b820191905f5260205f20905b8154815290600101906020018083116107ab57829003601f168201915b5050505050905082565b6006818051602081018201805184825260208301602085012081835280955050505050505f91509050805f018054610809906110a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610835906110a6565b80156108805780601f1061085757610100808354040283529160200191610880565b820191905f5260205f20905b81548152906001019060200180831161086357829003601f168201915b505050505090806001018054610895906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546108c1906110a6565b801561090c5780601f106108e35761010080835404028352916020019161090c565b820191905f5260205f20905b8154815290600101906020018083116108ef57829003601f168201915b5050505050908060020154905083565b805f8190555050565b600382805160208101820180518482526020830160208501208183528095505050505050818051602081018201805184825260208301602085012081835280955050505050505f9150915050805461097c906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546109a8906110a6565b80156109f35780601f106109ca576101008083540402835291602001916109f3565b820191905f5260205f20905b8154815290600101906020018083116109d657829003601f168201915b505050505081565b6040518060400160405280600481526020017f75756964000000000000000000000000000000000000000000000000000000008152506003604051610a3f90611409565b9081526020016040518091039020604051610a5990611467565b90815260200160405180910390209081610a7391906112a0565b50565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b610a9981610a87565b8114610aa3575f80fd5b50565b5f81359050610ab481610a90565b92915050565b5f60208284031215610acf57610ace610a7f565b5b5f610adc84828501610aa6565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610b1c578082015181840152602081019050610b01565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610b4182610ae5565b610b4b8185610aef565b9350610b5b818560208601610aff565b610b6481610b27565b840191505092915050565b610b7881610a87565b82525050565b5f6060820190508181035f830152610b968186610b37565b90508181036020830152610baa8185610b37565b9050610bb96040830184610b6f565b949350505050565b5f602082019050610bd45f830184610b6f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f82825260208201905092915050565b5f610c1d82610ae5565b610c278185610c03565b9350610c37818560208601610aff565b610c4081610b27565b840191505092915050565b610c5481610a87565b82525050565b5f606083015f8301518482035f860152610c748282610c13565b91505060208301518482036020860152610c8e8282610c13565b9150506040830151610ca36040860182610c4b565b508091505092915050565b5f610cb98383610c5a565b905092915050565b5f602082019050919050565b5f610cd782610bda565b610ce18185610be4565b935083602082028501610cf385610bf4565b805f5b85811015610d2e5784840389528151610d0f8582610cae565b9450610d1a83610cc1565b925060208a01995050600181019050610cf6565b50829750879550505050505092915050565b5f6020820190508181035f830152610d588184610ccd565b905092915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610d9e82610b27565b810181811067ffffffffffffffff82111715610dbd57610dbc610d68565b5b80604052505050565b5f610dcf610a76565b9050610ddb8282610d95565b919050565b5f67ffffffffffffffff821115610dfa57610df9610d68565b5b610e0382610b27565b9050602081019050919050565b828183375f83830152505050565b5f610e30610e2b84610de0565b610dc6565b905082815260208101848484011115610e4c57610e4b610d64565b5b610e57848285610e10565b509392505050565b5f82601f830112610e7357610e72610d60565b5b8135610e83848260208601610e1e565b91505092915050565b5f8060408385031215610ea257610ea1610a7f565b5b5f83013567ffffffffffffffff811115610ebf57610ebe610a83565b5b610ecb85828601610e5f565b9250506020610edc85828601610aa6565b9150509250929050565b5f604082019050610ef95f830185610b6f565b8181036020830152610f0b8184610b37565b90509392505050565b5f805f60608486031215610f2b57610f2a610a7f565b5b5f84013567ffffffffffffffff811115610f4857610f47610a83565b5b610f5486828701610e5f565b935050602084013567ffffffffffffffff811115610f7557610f74610a83565b5b610f8186828701610e5f565b9250506040610f9286828701610aa6565b9150509250925092565b5f60208284031215610fb157610fb0610a7f565b5b5f82013567ffffffffffffffff811115610fce57610fcd610a83565b5b610fda84828501610e5f565b91505092915050565b5f8060408385031215610ff957610ff8610a7f565b5b5f83013567ffffffffffffffff81111561101657611015610a83565b5b61102285828601610e5f565b925050602083013567ffffffffffffffff81111561104357611042610a83565b5b61104f85828601610e5f565b9150509250929050565b5f6020820190508181035f8301526110718184610b37565b905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806110bd57607f821691505b6020821081036110d0576110cf611079565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261115f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611124565b6111698683611124565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6111a461119f61119a84610a87565b611181565b610a87565b9050919050565b5f819050919050565b6111bd8361118a565b6111d16111c9826111ab565b848454611130565b825550505050565b5f90565b6111e56111d9565b6111f08184846111b4565b505050565b5b81811015611213576112085f826111dd565b6001810190506111f6565b5050565b601f8211156112585761122981611103565b61123284611115565b81016020851015611241578190505b61125561124d85611115565b8301826111f5565b50505b505050565b5f82821c905092915050565b5f6112785f198460080261125d565b1980831691505092915050565b5f6112908383611269565b9150826002028217905092915050565b6112a982610ae5565b67ffffffffffffffff8111156112c2576112c1610d68565b5b6112cc82546110a6565b6112d7828285611217565b5f60209050601f831160018114611308575f84156112f6578287015190505b6113008582611285565b865550611367565b601f19841661131686611103565b5f5b8281101561133d57848901518255600182019150602085019450602081019050611318565b8683101561135a5784890151611356601f891682611269565b8355505b6001600288020188555050505b505050505050565b5f81905092915050565b5f61138382610ae5565b61138d818561136f565b935061139d818560208601610aff565b80840191505092915050565b5f6113b48284611379565b915081905092915050565b7f75736572730000000000000000000000000000000000000000000000000000005f82015250565b5f6113f360058361136f565b91506113fe826113bf565b600582019050919050565b5f611413826113e7565b9150819050919050565b7f69640000000000000000000000000000000000000000000000000000000000005f82015250565b5f61145160028361136f565b915061145c8261141d565b600282019050919050565b5f61147182611445565b915081905091905056fea2646970667358221220a6a9764478ccbb1050817531369405464c2af9bb9fc9d65d9e383395dcbe73b764736f6c63430008170033"
    //     , chainId: 1337
    // }
    // const sentTransaction = await wallet.sendTransaction(tx)
    // await sentTransaction.wait(1)
    // console.log(sentTransaction);

}


main().then(() => process.exit(0)).catch((e) => {
    console.log(e)
})