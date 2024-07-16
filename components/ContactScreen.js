import React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const navigation = useNavigation();

  const navigateToChatScreen = () => {
    navigation.navigate('ChatScreen');
  };
  const navigateToContactScreen = () => {
    navigation.navigate('ContactScreen');
  };

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
  

    const renderContactItem=({item})=>{
        return(
            <View style={styles.contactItem}>
        <Image source={item.profilephoto} style={styles.profilePhoto} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <View style={styles.message}>
          <Text style={styles.messagetext}>Message</Text>
          </View>

        </View>
        
      </View>
    );
  };
    
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contactContainer}>
      <TouchableOpacity >
          <Icon name="add" size={20} style={styles.addIcon} />
        </TouchableOpacity>
        <Text style={styles.input}> Contacts</Text>
        <Image source={require("../assets/profile.jpg")} style={styles.imageview}/>
     </SafeAreaView>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
   marginTop:50,
    borderWidth: 1,
   borderRadius: 10,
   padding:5,
   width:'80%',
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
  
  
  input: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
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
     marginTop:250
  },
  contactText: {
    fontSize: 20,
    fontWeight: 'bold',
     
  },
  imageview:{
    borderRadius:25,
    height:45,
    width:45
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
  }
  
});

export default ContactScreen;
