const Web3 = require('web3');

const hardForkBlockNumber = process.env.ETH_UPGRADE_BLOCKNUMBER;

const pastNumber1 = 10000;
const pastNumber2 = 50000;
const pastNumber3 = 100000;

// const JST9hour = 9 * 60 * 60;

const convert_msec = 1000;

const INFURA_API_KEY = process.env.INFURA_API_KEY;
// Mainnet
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/"+INFURA_API_KEY));
// Testnet(Ropsten)
//const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/"+INFURA_API_KEY));

console.log("現時点でのEthereum Mainnetハードフォーク予想日時をご報告します。");
console.log("");
console.log("```");

web3.eth.getBlockNumber().then(lastBlockNumber => {
  web3.eth.getBlock(lastBlockNumber).then(lastBlock => {
    web3.eth.getBlock(lastBlockNumber - pastNumber1).then(pastBlock => {
      const blockMiningTime = (lastBlock.timestamp - pastBlock.timestamp) / pastNumber1;
      const unixtime_expectation = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime ) + lastBlock.timestamp;
      console.log("直近", pastNumber1, " ブロック生成平均時間: ", blockMiningTime, "秒    でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation * convert_msec).toLocaleString());

    web3.eth.getBlock(lastBlockNumber - pastNumber2).then(pastBlock => {
      const blockMiningTime = (lastBlock.timestamp - pastBlock.timestamp) / pastNumber2;
      const unixtime_expectation = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime ) + lastBlock.timestamp;
      console.log("直近", pastNumber2, " ブロック生成平均時間: ", blockMiningTime, "秒    でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation * convert_msec).toLocaleString());

    web3.eth.getBlock(lastBlockNumber - pastNumber3).then(pastBlock => {
      const blockMiningTime = (lastBlock.timestamp - pastBlock.timestamp) / pastNumber3;
      const unixtime_expectation = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime ) + lastBlock.timestamp;
      console.log("直近", pastNumber3, "ブロック生成平均時間: ", blockMiningTime, "秒    でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation * convert_msec).toLocaleString());
      
    const blockMiningTime12 = 12;
    const unixtime_expectation12 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime12 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime12, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation12 * convert_msec).toLocaleString());

    const blockMiningTime13 = 13;
    const unixtime_expectation13 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime13 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime13, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation13 * convert_msec).toLocaleString());

    const blockMiningTime14 = 14;
    const unixtime_expectation14 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime14 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime14, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation14 * convert_msec).toLocaleString());

    const blockMiningTime15 = 15;
    const unixtime_expectation15 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime15 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime15, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation15 * convert_msec).toLocaleString());

    const blockMiningTime16 = 16;
    const unixtime_expectation16 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime16 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime16, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation16 * convert_msec).toLocaleString());

    const blockMiningTime17 = 17;
    const unixtime_expectation17 = ((hardForkBlockNumber - lastBlockNumber) * blockMiningTime17 ) + lastBlock.timestamp;
    console.log("ブロック生成時間 ", blockMiningTime17, " 秒でのハードフォーク予想日時(JST):   ", new Date(unixtime_expectation17 * convert_msec).toLocaleString());

    console.log("```");
    console.log("以上、よろしくお願いいたします。");
    });
    });
    });
  });
});

