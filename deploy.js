const ethers = require("ethers");

// reading the abi, and adding it to the smart contract
const fs = require("fs-extra");

async function main() {
  // HTTP://127.0.0.1:7545

  // connecting the blockchain to a server
  const provier = new ethers.provier.jsonRpcProvider("HTTP://127.0.0.1:7545");
  // Adding my wallet, I add  my wallet using my private key
  const wallett = new ethers.Wallet(
    "0x10ca0cba1a28f400c84b0ac1c6b15ddf62edb5c22be6ba23bfe92d5b6f7d65fa",
    provier
  );
  // Reading and importing the abi as file
  const abi = fs.readFileSync();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
