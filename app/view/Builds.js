import React from 'react';
import { TouchableOpacity, StyleSheet, Text, FlatList, Button, View } from 'react-native';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import BuildContainer from '../container/BuildContainer';
import { BuildCard } from '../widget/BuildCard';

class InnerBuilds extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      builds: null,
      appSlug: this.props.navigation.getParam('slug', ''),
      refreshing: false
    }
  }

  componentDidMount() {
    this.onRefresh();
  }

  async onRefresh() {
    this.setState({
      ...this.state,
      refreshing: true
    })
    var result = await this.props.buildContainer.getBuilds(this.props.userContainer.state.userToken, this.state.appSlug)
    this.setState({
      ...this.state,
      builds: result,
      refreshing: false,
    })
  }

  render() {
    return (
      <FlatList
        data={this.state.builds}
        keyExtractor={item => item.build_number}
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.refreshing}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => { this.onItemClick(item) }}>
            <BuildCard build={item}></BuildCard>
          </TouchableOpacity>
        }
      />
    );
  }
}

export default function Builds(props) {
  return (
    <Subscribe to={[UserContainer, BuildContainer]}>
      {(user, builds) => (
        <InnerBuilds userContainer={user} buildContainer={builds} navigation={props.navigation} />
      )}
    </Subscribe>
  )
}