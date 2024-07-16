import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const navigateToSignupScreen = () => {
        navigation.navigate('SignupScreen');
    };
    const navigateToContactScreen = () => {
        navigation.navigate('ContactScreen');
    };


    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Log In</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Image source={require('../assets/mail.png')} style={styles.icon} />
                         <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="black"
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                       
                    </View>
                    <View style={styles.inputWrapper}>
                        <Image source={require('../assets/lock.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Login pressed')}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.arrowtext}>
                <Text style={styles.signupPrompt}>
                    Don't have an account?{' '}
                    <Text style={styles.signupLink} onPress={navigateToSignupScreen}>Sign up here</Text>
                </Text>
                <TouchableOpacity onPress={navigateToContactScreen} style={styles.arrowview}>
                <Image source={require('../assets/arrow.png')}  style={styles.arrowicon} />
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    loginContainer: {
          alignItems:'center',
          justifyContent:'center',
        marginTop:'100%',
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 60,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
    },
    loginText:{
   bottom:25,   
 color:'#FF9134',
 fontSize:50,
 fontWeight:'bold',
 marginTop:30
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
        height: 50,
        width:'65%',
        paddingHorizontal: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#FF9134',
        width: 317,
        height: 57,
        marginLeft: 31,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:20
    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    
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
    },
    signupLink:{
        color:'#FF9134',
        fontSize:18
    },
    signupPrompt:{
        marginTop:20,
        flexDirection:'row',
        fontSize:15
    },
    // icon:{
    //     width: 25,
    // height: 30,
    // resizeMode: 'contain',
   
    // },
    inputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    borderColor: '#000',
    height: 40,
    width:'70%',
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#F6F7FB',
    marginBottom:30
    },
    arrowtext:{
        flexDirection:'row',
    marginBottom:10
    },
    arrowicon:{
        height:35,
        width:35,
        marginTop:15,
        marginLeft:35
    },
    inputContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }
});

export default LoginScreen;
