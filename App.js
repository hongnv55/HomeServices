import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';


import LoginPage from './src/LoginPage';
import RegistrationPage from './src/RegistrationPage';
import  AuthenticatedNav from './src/PartnerView';


export const RootNavigator = StackNavigator(
    {
        LoginPage: { screen: LoginPage},
        RegistrationPage: { screen: RegistrationPage},
        AuthenticatedNav: { screen: AuthenticatedNav},
    },
    {
        initialRouteName: 'LoginPage',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator />
    );
  }
}