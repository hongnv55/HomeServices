/**
 * Created by hongnguyen on 1/25/18.
 */

import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


class TextButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultText: "Button"
        };
    }

    getIcon() {
        return (
            <View style={styles.icon}>
                <Image
                    source={{
                        uri: this.props.icon
                    }}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </View>
        );
    }

    render () {
        return (
            <View style={[styles.container, this.props.style]} >

                { this.props.icon ? this.getIcon() : <View></View>}

                <View style={[styles.labelContainer]}>
                    <Text
                        style={[styles.label, this.props.labelStyle]}
                        onPress={this.props.onPress}
                    >
                        {this.props.label ? this.props.label : this.state.defaultText}
                    </Text>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#3aa5e8',
        borderRadius: 2
    },
    labelContainer: {
        flex: 1,
        alignItems:'center'
    },
    label: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14
    },
    icon: {
        flex: 0.2,
        alignItems:'center',
        marginLeft: 5,
    }
});

export default TextButton;