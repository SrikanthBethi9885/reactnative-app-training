import React from "react";
import { ImageBackground, StyleSheet,View , Button, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const HomeScreen =()=>{

const navigation = useNavigation();
 const navigateToLoginScreen =()=>{
    navigation.navigate('LoginScreen')
 };
 const navigateToSignupScreen =()=>{
    navigation.navigate('SignupScreen')
 };
 return (
   
        <View style={styles.container}>
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
        <Text style={styles.text}>Welcome to G3</Text>
        <Text style={styles.text}>Innovations</Text>
        
        <View style={styles.buttonView}>
         <TouchableOpacity onPress={navigateToLoginScreen} style={styles.button} >
                <Text style={styles.buttontext}>Log In</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonView1}>
            <TouchableOpacity onPress={navigateToSignupScreen} style={styles.button1} >
                <Text style={styles.buttontext1}>Signup</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
);
};
const styles = StyleSheet.create({
   
    background:{
        width:'100%',
        height:'100%',
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    text:{
        color:'white',
        fontWeight:"bold",
        fontSize:35,
        top:40,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonView:{
        marginTop:150,
        width:'50%',
        padding:10,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
        backgroundColor:'#ffff'
    },
    buttonView1:{
        marginTop:30,
       width:'50%',
       backgroundColor:'#ffff',
       padding:10,
      borderRadius:20,
     justifyContent:"center",
     alignItems:"center"
    },
    buttontext1:{
      color:'#FF9134',
      fontWeight:"bold",
      fontSize:20
    },
    buttontext:{
        color:'#FF9134',
        fontWeight:"bold",
        fontSize:20
    }
   });
    

export default HomeScreen;