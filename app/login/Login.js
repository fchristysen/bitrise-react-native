import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Provider, Subscribe } from 'unstated';
import { UserContainer } from '../container/UserContainer';

export default class Login extends React.Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[UserContainer]}>
          {user => (
            <View style={styles.container}>
              <Text>Bitrise React Native</Text>
              <TextInput multiline={true}>{JSON.stringify(user.state.userProfile)}</TextInput>
              <Button title="Login" onPress={() => user.login('7rhW25g1EjmoH1sjwgiIDXlqN4Ut4IhGFmQ-jeMB33LgYPy4N9KyPdwU-bMWwE3FIQkT1pZDMyXX5SllivzAbA')} />
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