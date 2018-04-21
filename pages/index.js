import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

// Display a list of all available campaigns

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        // anything returned here acts as props for our component.
        return { campaigns };
    }
    renderCampaigns() {
        const items = this.props.campaigns.map((address) => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>
                            View Campaign
                        </a>
                    </Link>
                ),
                // fluid causes our cards to stretch to its parent's width
                fluid: true
            }
        });
        return <Card.Group items={items} />
    }
    render() {
        return (
        <Layout>
            <div>
                <h3>Open Campaigns</h3>
                <Link route="/campaigns/new">
                    <a>
                        <Button 
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>
                {this.renderCampaigns()}
            </div>
        </Layout>
        )
    }
}

export default CampaignIndex;