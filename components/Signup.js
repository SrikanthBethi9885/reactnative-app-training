import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const onPressButton = () => {
    alert("Signup Successful");
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={100} color="black" />
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A7FAFC",
    paddingHorizontal: 20,
    width:400,
    marginBottom:30
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    
  },
  button: {
    backgroundColor: 'blue',
    width: "100%",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Signup;
