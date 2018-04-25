import web3 from './web3';
import Campaign from './build/Campaign.json';

export default address => {
    console.log('Campaign.interface: ',JSON.parse(Campaign.interface));
    console.log('address in campaign: ',address);
    return new web3.eth.Contract(JSON.parse(Campaign.interface),
        address
    );
}