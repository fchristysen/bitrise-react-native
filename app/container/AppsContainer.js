import { Container } from 'unstated';

export default class AppsContainer extends Container {
    state = {
        apps: []
    };

    /** https://devcenter.bitrise.io/api/v0.1/#get-apps
     *  Calling api /apps to get accessible apps
     *  return list of apps
     */
    async getApps(pToken) {
        try {
            const resp = await fetch('https://api.bitrise.io/v0.1/apps', {
                headers: new Headers({
                    'Authorization': pToken
                })
            })
            const respBody = await resp.json()
            if (respBody.data != null) {
                this.setState({
                    ...this.state,
                    apps: respBody.data
                })
                return respBody.data;
            }
        } catch (error) {
            console.error(error);
        }
    }
}