const {ethers} = require("ethers");
const dotenv = require("dotenv").config('D:\React blockchain project\.env');




async function main(){
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/3f98e8b24e9b49f681e9f86a9dea3ed5");
  //Provider Code:- 
   // get BlockNumber
  //   const blockNum = await provider.getBlockNumber();
  // console.log(blockNum)
   
  // get Balance
  // const balance = await provider.getBalance("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72");
  // console.log(ethers.utils.formatEther(balance));

  // get Code
  // const code = await provider.getCode("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72")
  // console.log(code)

  // get Storage
  // const storage = await provider.getStorage("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72",0)
  // console.log(storage)

 // get Transaction Count
  // const transactionCount =  await provider.getTransactionCount("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72");
  // console.log(transactionCount)

  // const Avatar = await provider.getAvatar("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72")
  // console.log(Avatar)

  // const resolver = await provider.getResolver("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72")
  // console.log(resolver)

  // const lookupAdd = await provider.lookupAddress("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72")
  // console.log(lookupAdd)


  // const resolvename = await provider.resolveName("0x0EAa29c18Cb6580a508A3e018D1E5537d3B82E72")
  // console.log(resolvename)


  // const transaction = await provider.getTransactionCount("0xDdFAdad38e904dd3995Ea43f740D84A0e23Abc9A")
  // console.log(transaction)

//   const transactionRecipt = await provider.getTransactionReceipt("0xDdFAdad38e904dd3995Ea43f740D84A0e23Abc9A")
//   console.log(transactionRecipt)

  // const contentHash = await resolver.getContentHash("0xDdFAdad38e904dd3995Ea43f740D84A0e23Abc9A")
  // console.log(contentHash)

    // console.log(process.env.PRIVATE_KEY);




    //Signer
  // const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider);

  // let tx = {
  //   to:"0x812DdB581eFd227b3Fc8812101419eA9EC9F3958",
  //   value: ethers.utils.parseEther("0.01"),
     
  // };
  // let TX = await signer.sendTransaction(tx);
  // //Wait in Mempool 
  // await TX.wait();
  // console.log(TX)
  
}

main();