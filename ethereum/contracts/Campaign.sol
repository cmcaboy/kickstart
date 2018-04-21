pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        // This function simply creates a new contract
        // When we have 1 contract build another, we have to pass through
        // the msg.sender and other msg variables through to any child
        // campaigns.
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    // We need this function because the standard call on an array global variable
    // only sends 1 value of the array rather than the entire list.
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    // This is a brand new type in our contract.
    // This is a defintion. It is not an instance of a variable.
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }
    
    // Here, we are initiating an instance of the struct type
    Request[] public requests;
    
    address public manager; // make manager address public
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    // bool is true if approver has approved request.
    uint approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // constructor function
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++; // Keep track of the number of contributors
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
            // create a new Request variable
            // We must specify all fields
            Request memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
            
            // You could also declare newRequest like this:
            // Request(description, value, recipient, false);
            // If someone changed the order of variables in struct, it
            // would break.
            
            // append the Request variable to our global Requests array.
            requests.push(newRequest);
    }
    
    function aproveRequest(uint index) public {
        // A single contributor cannot vote more than once on a single requests
        // It should also be resilient on the number of approvers.
        
        // since we use requests[index] 3 times in this function, create
        // a local copy and just use that.
        Request storage request = requests[index];
        
        // ensure that sender is a listed approver for this contract.
        require(approvers[msg.sender]);
        
        // ensure that the sender has not already approved this request.
        require(!request.approvals[msg.sender]);
        
        // The sender is marked as an approver for this request.
        request.approvals[msg.sender] = true;
        
        // increment the approval approvalCount
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        // Check to see if minimum threshold has been met.
        require(request.approvalCount > (approversCount / 2));
        
        // Check to make sure the request has not already been finalized.
        require(!request.complete);

        // Send the money to the recepient
        request.recipient.transfer(request.value);
        
        // Flip the requests complete flag to true.
        request.complete = true;
    }
    
}