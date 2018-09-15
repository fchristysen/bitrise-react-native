import React from 'react';
import { TouchableOpacity, StyleSheet, Text, FlatList, Button, View } from 'react-native';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import AppsContainer from '../container/AppsContainer';
import { AppCard } from '../widget/AppCard';
import { BuildContainer } from '../container/BuildContainer';

class InnerBuilds extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      builds: null,
      appSlug: this.props.navigation.getParam('slug', ''),
      onRefresh: false
    }
  }

  componentDidMount() {
    this.onRefresh();
  }

  async onRefresh() {
    this.setState({
      ...this.state,
      onRefresh: true
    })
    var result = await this.props.buildContainer.getBuilds(this.props.userContainer.state.userToken, this.state.appSlug)
    this.setState({
      ...this.state,
      builds: result,
      onRefresh: false,
    })
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.builds)}</Text>
      </View>
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