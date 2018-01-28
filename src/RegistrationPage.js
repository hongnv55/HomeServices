/**
 * Created by hongnguyen on 1/28/18.
 */


import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableHighlight, Modal } from 'react-native';

import TextField from  './components/TextField'
import TextButton from './components/TextButton'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class RegistrationPage extends  React.Component {

    state = {
        modalVisible: false,
    };

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

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
                        <TextField
                            placeholder="Re-type password"
                            icon="http://simpleicon.com/wp-content/uploads/user-5.png"
                            secureTextEntry={true}
                            style={{flex: 0.14, marginHorizontal: 25}}/>
                        <View style={{flex: 0.15, flexDirection: 'row'}}>
                            <TextButton
                                label="Trở về"
                                style={{marginHorizontal: 10, flex: 1}}
                                labelStyle={{fontSize: 18, fontWeight: 'normal'}}
                                onPress={() => {navigation.goBack(null)}}
                            />
                            <TextButton
                                label="Đăng ký"
                                style={{marginHorizontal: 10, flex: 1}}
                                labelStyle={{fontSize: 18, fontWeight: 'normal'}}
                                onPress={() => {}}
                            />
                            <TextButton
                                label="Model Test"
                                style={{marginHorizontal: 10, flex: 1}}
                                labelStyle={{fontSize: 18, fontWeight: 'normal'}}
                                onPress={() => {this.openModal()}}
                            />
                        </View>
                    </View>
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={'fade'}
                        onRequestClose={() => this.closeModal()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>
                                <Text>This is content inside of modal component</Text>
                                <Button
                                    onPress={() => this.closeModal()}
                                    title="Close modal"
                                >
                                </Button>
                            </View>
                        </View>
                    </Modal>
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
    },
    modalContainer: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
    },
});

export default RegistrationPage;