import React from 'react';
import { StyleSheet, Text, FlatList, Button, View } from 'react-native';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import AppsContainer from '../container/AppsContainer';
import { AppCard } from '../widget/AppCard';

class InnerApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //use as dummy data
      apps: [
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.apps}
          keyExtractor={item => item.slug}
          renderItem={({ item }) =>
            <AppCard title={item.title} owner={item.owner.name} type={item.project_type}></AppCard>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Apps(props) {
  return (
    <Subscribe to={[UserContainer, AppsContainer]}>
      {(user, apps) => (
        <InnerApps user={user} apps={apps} navigate={props.navigation.navigate} />
      )}
    </Subscribe>
  )
}