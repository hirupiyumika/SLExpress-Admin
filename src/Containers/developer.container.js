import React, { Component } from 'react'

class DeveloperContainer extends Component {
    state = { 
        developers: []
    };

componentDidMount = async () =>  {
    await this.developerList();
 
};

async developerList() {
        try{
            if(auth.getCuttentAdmin()){
                const type = {userType: "developer"};
                const { data:developers} = await http.post(apiEndpoint,type);
                this.setState({developers});
                console.log("developers",developers); 
            }
        }
        catch(ex){}
    };
    render() { 
        return ( 

            
            <>kj</>
        

        );
    }
}

export default DeveloperContainer;
