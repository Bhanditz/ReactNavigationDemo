/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import AppContainer from './navigation/AppContainer';
// import TabNavigation from './navigation/TabNavigation';
// import DrawerNavigation from './navigation/DrawerNavigation';
import AuthenticationFlows from './navigation/AuthenticationFlows';

export default class App extends Component {
  render() {
    return (
      // <AppContainer />
      // <TabNavigation />
      // <DrawerNavigation />
      <AuthenticationFlows />
    );
  }
}
