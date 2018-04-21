import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x49dD6C9867A80Bb7a7255984DC8f5D740aE3b8A8'
);

export default instance;

