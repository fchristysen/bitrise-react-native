import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bitrise React Native</Text>
        <TextInput>Personal Access token</TextInput>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Build')} />
      </View>
    );
  }

  login(){
    
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