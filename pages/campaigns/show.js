import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
//import { is } from './../../.next/main';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        // the getinitialProps function has a props function that is
        // separate from the component's props. It contains a object called
        // query that includes the address of the url.
        
        const campaigns = Campaign(props.query.address);

        const summary = await campaigns.methods.getSummary().call();

        console.log(summary);

        // anything returned here acts as props for our component.
        return { };
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        );
    }
}

export default CampaignShow;
