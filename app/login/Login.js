import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Provider, Subscribe } from 'unstated';
import { UserContainer } from '../container/UserContainer';
import UserKey from '../../key';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      apiKey: UserKey,
    }
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[UserContainer]}>
          {user => (
            <View style={styles.container}>
              <Text>Bitrise React Native</Text>
              <FormLabel>API Token</FormLabel>
              <FormInput>{this.state.apiKey}</FormInput>
              <Button rounded={true} backgroundColor={"#3bc3a3"} title="Login" onPress={() => user.login(this.state.apiKey)} />
              {/* <Text>{JSON.stringify(user.state.userProfile.username)}</Text> */}
            </View>
          )}
        </Subscribe>
      </Provider>
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