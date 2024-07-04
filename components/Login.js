import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Login() {
  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={100} color="white" />
      <Text style={styles.title}>Log in to your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone, Email or Username"
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.createAccountText}>Create a New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98DDF4",
    alignItems: "center",
    justifyContent: "center",
    color:'red',
    width:300,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "70%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  createAccountText: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
