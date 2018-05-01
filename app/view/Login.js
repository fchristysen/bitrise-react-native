import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Subscribe } from 'unstated';
import UserContainer from '../container/UserContainer';
import UserKey from '../../key';

class InnerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: UserKey,
      message: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Bitrise React Native</Text>
        <FormLabel>API Token</FormLabel>
        <FormInput value={this.state.apiKey} onChangeText={this.handleChange} />
        <Button rounded={true} backgroundColor={"#3bc3a3"} title="Login" onPress={this.onLoginResult} />
        <Text>{this.state.message ? this.state.message : ""}</Text>
      </View>
    );
  }

  handleChange = (value) => {
    this.setState({
      ...this.state,
      apiKey: value,
    });
  }

  onLoginResult = async () => {
    var result = await this.props.user.login(this.state.apiKey);
    if (result) {
      console.log("Success");
      this.setState({
        ...this.state,
        message: null
      });
      this.props.navigate('Apps');
    } else {
      console.log("Failed");
      this.setState({
        ...this.state,
        message: "Incorrect API Key"
      });
    }
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

export default function Login(props) {
  return (
    <Subscribe to={[UserContainer]}>
      {user => (
        <InnerLogin user={user} navigate={props.navigation.navigate} />
      )}
    </Subscribe>
  )
}