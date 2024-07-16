import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-vector-icons/Ionicons';

const SignupScreen = () => {
    const navigation = useNavigation();

    const navigateToLoginScreen = () => {
        navigation.navigate('LoginScreen');
    };

    const navigateToContactScreen = () => {
        navigation.navigate('ContactScreen');
    };
    const navigateToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Sign Up</Text>
                <View style={styles.inputContainer}>
                <TextInput 
                placeholder='First Name'
                placeholderTextColor="black"
                style={styles.input1}
                />
                <TextInput 
                placeholder='Last Name'
                placeholderTextColor="black"
                style={styles.input2}
                />
                    <View style={styles.inputWrapper}>
                    <Image source={require('../assets/mail.png')} style={styles.icon}  />
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
                            style={styles.input4 }
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginPrompt}>Already have an account?{' '}
                    <TouchableOpacity onPress={navigateToLoginScreen} style={styles.loginscreen}>
                        <Text style={styles.loginLink}>Log In here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToHomeScreen}>
                    <Image source={require("../assets/home.png")} style={styles.homeimg} />
                        </TouchableOpacity>
                </Text>
                <TouchableOpacity style={styles.next} onPress={navigateToContactScreen}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
      height: '100%',
     alignItems: 'center',
     justifyContent: 'center'
    },
    signupContainer: {
        backgroundColor: 'white', 
        height:'55%',
        width:'100%',
        marginTop:'100%',
       borderTopLeftRadius:60,
        alignItems: 'center',
    },
    signupText: {
        color: '#FF9134',
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 24,
    },
    inputContainer: {
        width: '90%',
        alignItems:'center',
        justifyContent:'center'
    },
    input1: {
        backgroundColor: '#F6F7FB',
        color: 'black',
       
        borderColor: '#000',
        height: 40,
        width:'50%',
        borderRadius: 5,
        margin: 10,
    },
    input2: {
        backgroundColor: '#F6F7FB',
        color: 'black',
        
        borderColor: '#000',
        height: 40,
        width:'50%',
        borderRadius: 5,
        margin: 10,
    },
    button: {
        backgroundColor: '#FF9134',
        height: 50,
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop:10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    loginPrompt: {
        marginTop: 10,
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    loginLink: {
        color: '#FF9134',
        fontWeight: '700',
    },
    fptext:{
        color:'#FF9134',
        fontWeight:'bold',
        marginBottom:20
    },
    loginLinkText:{
        color:'#FF9134'
    },
    nextText:{
        color:'#FF9134',
        marginTop:20
    },
    loginscreen:{
        flexDirection:'row',

    },
    inputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    
    borderColor: '#000',
    height: 40,
    width:'50%',
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#F6F7FB',
    },
    homeimg:{
        height:25,
        width:20,
        marginLeft:30,
       
    },
    icon:{
        padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    },
    
});

export default SignupScreen;
