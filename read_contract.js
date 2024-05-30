const { ethers } = require("ethers");
const transfer = require('./transfer.json');



const RPC = "https://sepolia.infura.io/v3/3f98e8b24e9b49f681e9f86a9dea3ed5";
//const account1 = "0x6A2C90e7148751F07C0A3A196c5193C0D6920c83";
//const privatekey =
  //"d40edfdc219f0dc645e0993f6cd6f81a1952cc33108f60a44bc1f9c176b83250";

const provider = new ethers.providers.JsonRpcProvider(RPC);

//const wallet = new ethers.Wallet(privatekey, provider);

const contractAddress = "0x1BD7c15F65319F14d1194cC0C5AaF3c64Fa78E0C";
const ABI = transfer.abi;
console.log(ABI);


async function call() {

    const contract = new ethers.Contract(contractAddress,ABI,provider);
    
    yconsole.log(`The address  of Owner: ${await contract.getOwnerAdd()}`)
    console.log(`The add of Owner: ${await contract.owner()}`)
    
    
  }
  call();
