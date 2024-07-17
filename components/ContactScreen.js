import React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity,Text, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MessageScreen from './MessageScreen';

const ContactScreen = () => {
    const navigation = useNavigation();

  const navigateToChatScreen = () => {
    navigation.navigate('ChatScreen');
  };
  const navigateToContactScreen = () => {
    navigation.navigate('ContactScreen');
  };
  const navigateToMessageScreen =()=>{
    navigation.navigate(MessageScreen);
  }
  const [newContactsName, setNewContactsName] = useState('');
  const [showModal, setShowModal] = useState(false);

    const [contacts, setContacts]=useState([
{id:'1',
    name: 'Albert Moedanao',
    profilephoto: require("../assets/Img6.png"),
  
},
{id:'2',
    name:'Celso Thron',
    profilephoto:require("../assets/Img4.png"),
    
},
{id:'3',
    name:'Ruben Kishimoto',
    profilephoto:require("../assets/Img5.png"),
  
},
{id:'4',
    name:'John Doe',
    profilephoto:require("../assets/Img3.png"),
    
}
    ]);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    const addContact = () => {
      if (newContactsName.trim() === '') {
        return
      };
     const newId = (contacts.length + 1).toString();
      const newContacts = { id: newId, name: newContactsName, profilephoto: require("../assets/default-profile.png") };
      setContacts([...contacts, newContacts]);
      setNewContactsName('');
      toggleModal();
    };
  

    const renderContactItem=({item})=>{
        return(
            <View style={styles.contactItem}>
        <Image source={item.profilephoto} style={styles.profilePhoto} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <View style={styles.message}>
          <TouchableOpacity onPress={navigateToMessageScreen}>
          <Text style={styles.messagetext}>Message</Text>
          </TouchableOpacity>
          </View>

        </View>
        
      </View>
    );
  };
    
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contactContainer}>
      <TouchableOpacity onPress={toggleModal}>
          <Icon name="add" size={20} style={styles.addIcon} />
        </TouchableOpacity>
        <Text style={styles.input}> Contacts</Text>
        <Image source={require("../assets/profile.jpg")} style={styles.imageview}/>
     </SafeAreaView>

     <Modal
      visible={showModal}
      animationType='slide'
      transparent={true}
      onRequestClose={toggleModal}>
<View style={styles.modalContainer}>
<View style={styles.modalContent}>
<Text style={styles.header}>Add Contact</Text>
<TextInput 
style={styles.inputText}
  placeholder='Enter Contact Name'
  onChangeText={text =>setNewContactsName(text)}
/>
<View style={styles.buttons}>
  <TouchableOpacity style={styles.addbutton} onPress={addContact}>
<Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.cancelbutton} onPress={toggleModal}>
<Text style={styles.buttonText}>Cancel</Text>
  </TouchableOpacity>
</View>
</View>
</View>
</Modal>
        <View style={styles.list}>
      <FlatList
        style={styles.list}
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    <View style={styles.buttonview}>
          <TouchableOpacity onPress={navigateToContactScreen} style={styles.contactButton}>
            <Icon name="person-circle-outline" size={40} style={styles.contactIcon} />
            <Text style={styles.contactText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToChatScreen} style={styles.contactButton}>
            <Icon name="chatbubbles" size={35} style={styles.contactIcon} />
            <Text style={styles.contactText}>Chat</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
        alignItems:"center",
        justifyContent:"center"
  },
  contactContainer: {
    flexDirection:'row',
      alignItems:"center",
      justifyContent:"center",
      padding:5,
      width:'80%',
      marginTop:60,
      borderWidth:1,
      borderRadius:15
    },
    
list: {
    flex: 1,
    width: '100%',
    marginTop:30
  
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    alignItems:'center',
    justifyContent:'center'
  },
  contactInfo: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  
  input:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:17
  },
  addIcon:{
  marginRight:40,
  marginBottom:17
  },
  
  buttonview:{
    flexDirection:'row',
    
  },
  contactButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  contactIcon: {
    marginRight: 10,
     
  },
  contactText: {
    fontSize: 20,
    fontWeight: 'bold',
     
  },
  imageview:{
    borderRadius:25,
    height:45,
    width:45,
    marginLeft: 40,
    marginBottom:17
  },
  messagetext:{
    marginTop:5,
    fontWeight:'bold',
    marginLeft:'48%',
    color:'#FF9134'
  },
  message:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom:90
  },
  addbutton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#FF9134',
    marginRight:10,
    
  },
  cancelbutton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#FF9134',
    marginLeft:10,
    
  },
  buttons:{
    flexDirection:'row'
  },
  header:{
    fontWeight:'bold',
    marginBottom:30,
    fontSize:20
  },
  inputText:{
    backgroundColor:'#F1F5EE',
    fontSize:14,
    marginBottom:30,
    width:'70%',
    height:35
  },
  buttonText:{
    color:'white'
  }
  
});

export default ContactScreen;
