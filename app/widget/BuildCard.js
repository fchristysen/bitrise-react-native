import React from 'react'
import { Text, View} from 'react-native'
import { Card } from 'react-native-elements'

export class BuildCard extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			...this.props.build
		}
	}

	render() {
		return(
			<Card><View style={{flex:1, flexDirection:'column', alignItems:'stretch'}}>
				<View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
					<Text>{this.state.build_number + "/" + this.state.branch}</Text>
				</View>
				<View>

				</View>
			</View></Card>
		)
	}
}