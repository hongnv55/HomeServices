/**
 * Created by hongnguyen on 1/25/18.
 */


import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>

                <View style={styles.icon}>
                    <Image
                        source={{
                            uri: this.props.icon
                        }}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>

                <TextInput style={styles.textInput} placeholder={this.props.placeholder} secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: 'center',
    },
    textInput: {
        flex: 0.65
    },
    icon: {
        flex: 0.3,
        alignItems:'center'
    }
});


export default TextField;