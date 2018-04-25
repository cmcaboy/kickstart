import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import {Card,Grid,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        // the getinitialProps function has a props function that is
        // separate from the component's props. It contains a object called
        // query that includes the address of the url.
        
        const campaigns = Campaign(props.query.address);

        const summary = await campaigns.methods.getSummary().call();

        console.log(summary);

        // anything returned here acts as props for our component.
        return { 
            address:                props.query.address,
            minimumContribution:    summary[0],
            balance:                summary[1],
            requestsCount:          summary[2],
            approversCount:         summary[3],
            manager:                summary[4]
        };
    }

    renderCards(){
        const {
            balance, 
            minimumContribution, 
            manager, 
            requestsCount, 
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                description: 'The manager created this campaign, and can finalize the contract.',
                meta: 'The address of the manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description: 'The minimum amount of wei required to become an approver.',
                meta: 'Minimum Contribution (wei)',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                description: 'A request tries to withdraw money from the contract. Requests must be approved by the approvers.',
                meta: 'Number of Requests',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                description: 'The number of people who have donated to the contract.',
                meta: 'The number of approvers',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                description: 'The balance is how much money the campaign has left to spend.',
                meta: 'The balance of the contract in ether',
                style: { overflowWrap: 'break-word' }
            },

        ]
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;
