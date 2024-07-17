import React from "react";
import { View, Text, StyleSheet, Image,FlatList, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
const MessageScreen = () => {
    const [inputMessage, setInputMessage] = useState(''); 
  const [messages, setMessages] = useState([]); 

  
  const addMessage = () => {
    if (inputMessage.trim() === '') {
      return; 
    }
    const newMessage = { id: Math.random().toString(), text: inputMessage };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage(''); 
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.area}>
        <Text style={styles.text}>ChatApp</Text>
      </SafeAreaView>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={text => setInputMessage(text)}
          />

          <TouchableOpacity onPress={addMessage}>
        <Icon name='send-outline' size={30} style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      area: {
        width: '100%',
        height: 80,
        backgroundColor: 'orange',
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white",
      
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      input: {
        flex: 1,
        textAlign: "center",
        backgroundColor: '#BFC2BD',
        height: 40,
        borderRadius: 10,
        marginRight: 10,
        color: 'black',
      },
      icon: {
        color: 'black',
        marginLeft: 10,
      },
      messageItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        maxWidth: '80%',
        alignSelf: 'flex-end',
      },
      messageText: {
        fontSize: 16,
      },
      list:{
        flex:1,
        width:'100%',
        backgroundColor:'#F1F5EE'
      }
})
export default MessageScreen;
