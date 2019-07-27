import React, { Component } from 'react'; //from package.json

import {        // import components
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

class Home extends Component {
    state = {
        userName: '',
    };
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name :
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='John Snow'
                    onChangeText={(text) => {
                        this.setState({
                            userName: text,
                        });
                    }}
                    value={this.state.userName}
                />
                <TouchableOpacity
                    onPress={() => {
                        Actions.chat({
                            userName: this.state.userName,
                        });
                        // navigate to the second screen, and to pass it the name
                        //alert(this.state.name)
                        //debugger;
                    }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
    }
});

export default Home;