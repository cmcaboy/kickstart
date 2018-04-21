import Web3 from 'web3';

// Use the metamask provider. We think metamask has already injected
// a metamask instance on the page. We should alter this structure
// to account for customers who do not have metamask install.
// We will fix this later.
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/r4hArekwqoBUtk2uNE6r');
    web3 = new Web3(provider);
}

export default web3;