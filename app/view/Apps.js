import React from 'react';
import { TouchableOpacity, StyleSheet, Text, FlatList, Button, View } from 'react-native';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import AppsContainer from '../container/AppsContainer';
import { AppCard } from '../widget/AppCard';

class InnerApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apps: null,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.onRefresh()
  }

  onItemClick(item) {
    this.props.navigate("Builds", item)
  }

  async onRefresh() {
    this.setState({
      ...this.state,
      refreshing: true,
    })
    var result = await this.props.apps.getApps(this.props.user.state.userToken);
    this.setState({
      ...this.state,
      apps: result,
      refreshing: false,
    })
  }

  render() {
    return (
      <FlatList
        data={this.state.apps}
        keyExtractor={item => item.slug}
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.refreshing}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => { this.onItemClick(item) }}>
            <AppCard title={item.title} owner={item.owner.name} type={item.project_type}></AppCard>
          </TouchableOpacity>
        }
      />
    );
  }
}

export default function Apps(props) {
  return (
    <Subscribe to={[UserContainer, AppsContainer]}>
      {(user, apps) => (
        <InnerApps user={user} apps={apps} navigate={props.navigation.navigate} />
      )}
    </Subscribe>
  )
}