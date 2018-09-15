import { Container } from 'unstated'

export class BuildContainer extends Container {
	state = {
		builds: []
	};

	/** https://api.bitrise.io/v0.1/apps/APP-SLUG/builds?limit=5
	 *  Calling api to get builds list
	 *  return list of builds
	 */
	async getBuilds(pToken, pSlugs) {
		try {
			const resp = await fetch(`https://api.bitrise.io/v0.1/apps/${pSlugs}/builds?limit=5`, {
				headers: new Headers({
					'Authorization': pToken
				})
			})
			const respBody = await resp.json()
			if (respBody.data != null) {
				this.setState({
					...this.state,
					builds: respBody.data
				})
				return respBody.data;
			}
		} catch (error) {
			console.error(error);
		}
	}
}