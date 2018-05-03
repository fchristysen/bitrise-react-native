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
        {
          "slug": "bae393e19a578139",
          "title": "android-playground",
          "project_type": "android",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/android-playground.git",
          "repo_slug": "android-playground",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "7cd982255331300d",
          "title": "district-core",
          "project_type": "react-native",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/district-core.git",
          "repo_slug": "district-core",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "89f8072fad44b9b7",
          "title": "playground",
          "project_type": "android",
          "provider": "github",
          "repo_owner": "fchristysen",
          "repo_url": "git@github.com:fchristysen/playground.git",
          "repo_slug": "playground",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "user",
              "name": "fchristysen",
              "slug": "4f2bd3796bfec0ca"
          }
      },
      {
          "slug": "5e95fad0522d85ab",
          "title": "android-git-hooks-sample",
          "project_type": "android",
          "provider": "github",
          "repo_owner": "harlie2120",
          "repo_url": "git@github.com:harlie2120/android-git-hooks-sample.git",
          "repo_slug": "android-git-hooks-sample",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "user",
              "name": "t-harlie.dharma",
              "slug": "ccf4f2a34f2107b9"
          }
      },
      {
          "slug": "78b82c487b6eb8bd",
          "title": "Traveloka iOS",
          "project_type": "ios",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/ios.git",
          "repo_slug": "ios",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "2bad28e931d9da8c",
          "title": "Traveloka TERA Partner App",
          "project_type": "react-native",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/district-tera.git",
          "repo_slug": "district-tera",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "c47b2b54be915f42",
          "title": "Traveloka AXES Partner App",
          "project_type": "react-native",
          "provider": "custom",
          "repo_owner": "DRNAXES",
          "repo_url": "ssh://git@git.traveloka.com/diffusion/DRNAXES/district-axes.git",
          "repo_slug": "district-axes",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "101d5dd7cc3e23ec",
          "title": "Traveloka iOS Mirror",
          "project_type": "ios",
          "provider": "custom",
          "repo_owner": "repos",
          "repo_url": "ssh://APKAJKOEKBFZFZJFTQOA@git-codecommit.ap-southeast-1.amazonaws.com/v1/repos/traveloka-ios",
          "repo_slug": "traveloka-ios",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "26adae12ecd31fd6",
          "title": "Traveloka RN Android",
          "project_type": "react-native",
          "provider": "custom",
          "repo_owner": "DRNTVLK",
          "repo_url": "ssh://git@git.traveloka.com/diffusion/DRNTVLK/district-traveloka.git",
          "repo_slug": "district-traveloka",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "ef75b3b30117059a",
          "title": "Traveloka RN iOS",
          "project_type": "react-native",
          "provider": "custom",
          "repo_owner": "DRNTVLK",
          "repo_url": "ssh://git@git.traveloka.com/diffusion/DRNTVLK/district-traveloka.git",
          "repo_slug": "district-traveloka",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "3f9795673c45f73f",
          "title": "DEPRECATED - Traveloka iOS Diff Phabricator",
          "project_type": "ios",
          "provider": "custom",
          "repo_owner": "source",
          "repo_url": "ssh://git@git.traveloka.com/source/staging-area.git",
          "repo_slug": "staging-area",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "3373a85a05b05554",
          "title": "Traveloka Android Diff",
          "project_type": "android",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/android.git",
          "repo_slug": "android",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "277e3873591f7694",
          "title": "Traveloka Android",
          "project_type": "android",
          "provider": "github",
          "repo_owner": "traveloka",
          "repo_url": "git@github.com:traveloka/android.git",
          "repo_slug": "android",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
      },
      {
          "slug": "ab0d84b32b466602",
          "title": "DEPRECATED - Traveloka iOS Phabricator",
          "project_type": "ios",
          "provider": "custom",
          "repo_owner": "TVIOSNEW",
          "repo_url": "ssh://git@git.traveloka.com/diffusion/TVIOSNEW/tvlk-ios-new.git",
          "repo_slug": "tvlk-ios-new",
          "is_disabled": false,
          "status": 1,
          "is_public": false,
          "owner": {
              "account_type": "organization",
              "name": "Traveloka",
              "slug": "585b5f157b597a34"
          }
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