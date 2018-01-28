/**
 * Created by hongnguyen on 1/24/18.
 */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableHighlight, ScrollView } from 'react-native';

import TextField from  './components/TextField'
import TextButton from './components/TextButton'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function createAccount() {
    console.log('create account')
}

class LoginPage extends  React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextField
                            placeholder="Username"
                            icon="http://simpleicon.com/wp-content/uploads/user-5.png"
                            style={{flex: 0.14, marginHorizontal: 25, marginTop: 25}}
                        />
                        <TextField
                            placeholder="Password"
                            icon="http://simpleicon.com/wp-content/uploads/user-5.png"
                            secureTextEntry={true}
                            style={{flex: 0.14, marginHorizontal: 25}}/>
                        <Text>
                            Chưa có tài khoản?
                            <Text
                                style={{color: '#36a7ed', fontStyle: 'italic', marginHorizontal: 5}}
                                onPress={() => navigation.navigate('RegistrationPage')}>
                                Tạo mới
                            </Text>
                        </Text>
                        <TextButton
                            label="Đăng nhập"
                            style={{marginHorizontal: 10, flex: 0.15}}
                            labelStyle={{fontSize: 18, fontWeight: 'normal'}}
                            onPress={() => navigation.navigate('AuthenticatedNav')}
                        />
                        <TextButton
                            icon="http://simpleicon.com/wp-content/uploads/user-5.png"
                            label="LOGIN WITH FACEBOOK"
                            style={{marginHorizontal: 10, backgroundColor: '#3445ba', flex: 0.15,}}
                        />
                        <TextButton
                            icon="http://simpleicon.com/wp-content/uploads/user-5.png"
                            label="LOGIN WITH GOOGLE"
                            style={{marginHorizontal: 10, backgroundColor: '#ed8240', flex: 0.15,}}
                        />
                    </View>
                </View>
                <Text style={styles.homeServices}>
                    HOME SERVICES
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#2a2f3d',
        width: width,
        height: height,
    },
    homeServices: {
        color: "white",
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: -height + height/9
    },
    inputContainer: {
        flex: 0.5,
        backgroundColor: "white",
        marginHorizontal: 70,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default LoginPage;