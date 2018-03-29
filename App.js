import React from 'react';
import RootStack from './app/stackNavigator'
// import RootStack from './app/build/Build'

export default class App extends React.Component{
  render() {
    return <RootStack />;
  }
}