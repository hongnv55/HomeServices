/**
 * Created by hongnguyen on 1/25/18.
 */


import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableHighlight, ScrollView } from 'react-native';

import MainView from './MainView'

import { StackNavigator } from 'react-navigation';


export class PartnerView extends React.Component {

    static navigationOptions = {
        title: 'Partner',
    };

    render () {
        const { navigation } = this.props;

        return (
            <View>
                <Text> Here is Partner view</Text>
                <Text
                    onPress={()=>{
                            console.log("go to main view")
                            navigation.navigate('MainView');
                    }}
                >
                    Go to MainView
                </Text>
                <Text onPress={()=>{
                            console.log("go to main view")
                            navigation.goBack(null);
                    }}
                >
                    Logout
                </Text>
            </View>
        );

    }

}

export const AuthenticatedNav = StackNavigator (
    {
        PartnerView: {
            screen: PartnerView,
            title: "Partner"
        },
        MainView: {
            screen: MainView
        }
    }
);

export default AuthenticatedNav;
