import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
const LoginScreen = () => {
    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.loginfields}>
                <Text style={styles.textcolor}>
                    Sign Up
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="alberto@gmail.com"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, { marginTop: 24 }]}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={[styles.button, { marginTop: 24 }]}>
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.prompttext}>Do you have account? <TouchableOpacity style={styles.promtlink}>Login here</TouchableOpacity></Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        width: 375,
        height: 812,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    loginfields: {
        position: 'absolute',
        bottom: 0,
        width: 375,
        height: 434,
        borderTopLeftRadius: 60,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
    },
    textcolor: {
        color: '#FF9134',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 55,
        fontWeight: '700'
    },
    input: {
        backgroundColor: '#F6F7FB',
        color: 'black',
        width: 313,
        height: 58,
        marginLeft: 31,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#FF9134',
        width: 317,
        height: 57,
        marginLeft: 31,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    prompttext: {
        color: 'black',
        fontSize: 12,
        marginLeft: 89.5,
        marginTop: 20,
        fontWeight: '700'
    },
    promtlink: {
        fontSize: 12,
        color: '#FF9134'
    }
});

export default LoginScreen;
