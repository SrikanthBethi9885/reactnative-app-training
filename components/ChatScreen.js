import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity,  FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import MessageScreen from './MessageScreen';


  const ChatScreen = () => {
    const navigation = useNavigation();
  
    const navigateToContactScreen = () => {
      navigation.navigate('ContactScreen');
    };
    const navigateToChatScreen = () => {
      navigation.navigate('ChatScreen');
    };
    const navigateToMessageScreen =(item)=>{
      navigation.navigate('MessageScreen',{ contactName: item.name, profilePhoto: item.profilephoto });
    }

    const contacts=[
      {id:'1',
          name: 'Albert Moedanao',
          profilephoto: require("../assets/Img6.png"),
          lastseen:"Last Seen Today 10:30 Am" 
      },
      {id:'2',
          name:'Celso Thron',
          profilephoto:require("../assets/Img4.png"),
          lastseen:"Last Seen Today 05:30 pm" 
      },
      {id:'3',
          name:'Ruben Kishimoto',
          profilephoto:require("../assets/Img5.png"),
          lastseen:"Last Seen Today 2:05 Am" 
      },
      {id:'4',
          name:'John Doe',
          profilephoto:require("../assets/Img3.png"),
          lastseen:"Last Seen Today 4:00 pm" 
      }
          ]
          const renderContactItem=({item})=>{
            return(
                <View style={styles.contactItem}>
            <Image source={item.profilephoto} style={styles.profilePhoto} />
            <View style={styles.contactInfo}>
            <TouchableOpacity onPress={() => navigateToMessageScreen(item)}>
              <Text style={styles.contactName}>{item.name}</Text>
              </TouchableOpacity>
              <Text style={styles.lastseen}>{item.lastseen}</Text>
            </View>
          </View>
        );
      };
        
  
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.chatContainer}>
          <Icon name="add" size={30} style={styles.addIcon} />
          <Text style={styles.input}> Chats</Text>
          <Image source={require("../assets/profile.jpg")} style={styles.imageview}/>
       </SafeAreaView>
       <FlatList
       style={styles.list}
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
       />
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

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    chatContainer:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"center",
      padding:5,
      width:'80%',
      marginTop:60,
      borderWidth:1,
      borderRadius:10
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
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input:{
    fontSize:20,
    fontWeight:'bold',
    

  },
  addIcon:{
  marginRight:40
  },
  buttonview:{
    flexDirection:'row',

  },
  imageview:{
    borderRadius:25,
    height:45,
    width:45,
    marginLeft:60
  },
  lastseen:{
    marginTop:10
  }
  
});

export default ChatScreen;
