const {ether, ethers, Wallet, Signer} = require('ethers');
const transfer = require('./transfer.json');

const RPC =  'https://sepolia.infura.io/v3/3f98e8b24e9b49f681e9f86a9dea3ed5';

const provider = new ethers.providers.JsonRpcProvider(RPC)

const contractAddress ='0x1BD7c15F65319F14d1194cC0C5AaF3c64Fa78E0C';
const ABI = transfer.abi;

async function main(){
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    const transaction = await contract.queryFilter('transaction')

    transaction.map((item)  => {
        console.log(item.args.to, ":" ,ethers.utils.formatEther(item.args._amount))
    })
    


}

main();