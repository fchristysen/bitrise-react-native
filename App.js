import React from 'react';
import RootStack from './app/StackNavigator'
import { Provider } from 'unstated'

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <RootStack />
      </Provider>);
  }
}