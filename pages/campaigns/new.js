import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
// Link - allows us to render anchor tags in our component. Helps
// us setup navigation. We don't have any Links in this app though.
// Router - programmatically re-direct people from one page to
// another page.
import { Link,Router } from '../../routes';


class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();

            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            
            Router.pushRoute('/');

        } catch (err) {
            this.setState({ errorMessage: err.message.split("\n")[0] })
        };

        this.setState({loading: false});

    }
    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="Wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={(event) => this.setState({
                                minimumContribution: event.target.value
                            })}
                        />
                    </Form.Field>
                    <Message error header="oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;