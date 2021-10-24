const INFURA_API_KEY = process.env.INFURA_API_KEY;
const privKey = process.env.PRIV_KEY;
const fromAddress = process.env.FROM_ADDRESS;
const toAddress = process.env.TO_ADDRESS;
console.log("fromAddress: " + fromAddress);

const Web3 = require('web3');
const ethTx = require('ethereumjs-tx').Transaction;

const web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/'+INFURA_API_KEY));
web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/v3/'+INFURA_API_KEY));

async function main() {
  // 著名付きトランザクションのnonce値として必要なため、送信元アドレスのTransaction countを取得する
  const count = await web3.eth.getTransactionCount(fromAddress);
  const count16 = count.toString(16);
  const countHex = `0x${count16}`;

  console.log("nonce: " + count);

  const privateKey = new Buffer.from(privKey, "hex");
  const txGasPrice = web3.utils.toHex(web3.utils.toWei('0.000000025', 'ether'));
  const txGasLimit = web3.utils.toHex(21000);
  const txValue = web3.utils.toHex(web3.utils.toWei('0.009876543210987654', 'ether'));

  // transactionのパラメータの設定
  const txParams = {
    nonce: countHex,
    gasPrice: txGasPrice,
    gasLimit: txGasLimit,
    to: toAddress,
    value: txValue,
    data: null
  };
  console.log("txParams:");
  console.log(txParams);
  // Transactionオブジェクトの生成
  const tx = new ethTx(txParams, { 'chain': 'ropsten' });
  // 秘密鍵での署名 
  tx.sign(privateKey);
　　　// Transactionオブジェクトをシリアライズして、16進数で表現
  const serializedTx = tx.serialize();
  const rawTx = '0x' + serializedTx.toString('hex');
  console.log("rawTx: " + rawTx);
  // 署名付きトランザクションの送信
  await web3.eth.sendSignedTransaction(rawTx);
}

main();
