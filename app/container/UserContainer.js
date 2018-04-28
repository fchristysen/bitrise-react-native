import { Container } from "unstated";

export class UserContainer extends Container {
    state = {
        userToken: ""
        , userProfile: {}
    };

    // calling api /me to test if provided auth token is valid
    // return boolean; true if auth is valid
    async login(pToken) {
        try {
            const resp = await fetch('https://api.bitrise.io/v0.1/me', {
                headers: new Headers({
                    'Authorization': pToken
                })
            })
            const respBody = await resp.json()

            if(respBody.data!=null){
                this.setState({
                    userToken: pToken
                    , userProfile: respBody.data
                })
                return true;
            }else{
                return false;
            }
        } catch (error) {
            console.error(error);
        }
    }
}