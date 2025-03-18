const { Web3 } = require('web3');
// if you are using ESM style imports, use this line instead:
// import { Web3 } from 'web3';

const web3 = new Web3("https://soft-small-fog.bsc.quiknode.pro/825277341ce1135e0910ae3e74509959bb7477d4/");

async function fetchBlockNumber() {
    try {
        const currentBlockNumber = await web3.eth.getBlockNumber();
        console.log('Current block number:', currentBlockNumber);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

fetchBlockNumber();
