import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Apps extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Success</Text>
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
