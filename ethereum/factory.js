import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x418FC25a08BA161F89c4F968822e2C11c2753317'
);

export default instance;

