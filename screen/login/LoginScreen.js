import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles/StyleLogin'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class LoginScreen extends Component {
    // logic code
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_header}>
                    <Text style={styles.container_header_text}> Register Now</Text>
                </View>
                <View style={styles.container_form_login}>
                    <View style={styles.container_form_login_input}>
                        <View style={styles.container_form_login_input_container}>
                            <Text>
                                Email
                            </Text>
                            <View style={styles.container_form_login_input_container_textInput}>
                                <FontAwesomeIcon icon={faEnvelope} size={20} />

                            </View>
                        </View>
                        <View style={styles.container_form_login_input_container}>
                            <Text>
                                Password
                            </Text>
                            <View style={styles.container_form_login_input_container_textInput}>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }



}
// css


export default LoginScreen;
