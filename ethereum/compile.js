const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // file system module w/ extra helpers

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

// Get the location of the contract
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');

// Get the compile file from the file system
const source = fs.readFileSync(campaignPath, 'utf8');

// output now has the 2 contracts from our Campaign.sol file.
const output = solc.compile(source, 1).contracts;

// Checks to see if the directory exists. If it does not, it gets created
fs.ensureDirSync(buildPath);


for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'), 
        output[contract]
    );
}