import React from 'react';
import { StyleSheet, Text, FlatList, Button, View } from 'react-native';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import AppsContainer from '../container/AppsContainer';

class InnerApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //use as dummy data
      apps: [
        {
          "is_disabled": false,
          "is_public": false,
          "owner": {
            "account_type": "organization",
            "name": "APIDemoOrg",
            "slug": "e1ec3dea540bcf21"
          },
          "project_type": "ios",
          "provider": "github",
          "repo_owner": "bitrise-samples",
          "repo_slug": "sample-apps-ios-swift-xcode6",
          "repo_url": "https://github.com/bitrise-samples/sample-apps-ios-swift-xcode6.git",
          "slug": "93f256e365d929d3",
          "status": 1,
          "title": "sample-apps-ios-swift-xcode6"
        },
        {
          "is_disabled": false,
          "is_public": false,
          "owner": {
            "account_type": "user",
            "name": "api-demo",
            "slug": "8e82ac7601178f17"
          },
          "project_type": "xamarin",
          "provider": "github",
          "repo_owner": "bitrise-samples",
          "repo_slug": "sample-apps-xamarin-cross-platform",
          "repo_url": "https://github.com/bitrise-samples/sample-apps-xamarin-cross-platform.git",
          "slug": "f46e89061e967f27",
          "status": 1,
          "title": "sample-apps-xamarin-cross-platform"
        }
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
            <Text>{item.title}</Text>
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