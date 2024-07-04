import React, { useState } from "react";
import { View,StyleSheet  } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import App from "../App";
const slides = [
    {
      key: 1,
      title: 'Dashboard',
      text: 'Description.\nSay something cool',
      image: require('../assets/logo.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Authentication',
      text: 'Other cool stuff',
      image: require('../assets/logo.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Get Started',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../assets/logo.png'),
      backgroundColor: '#22bcb5',
    }
  ];
   

export default function OnboardingScreen(){
    const[showRealApp,setShowRealApp]=useState(false);
    const_renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
     const _onDone = () => {
        setShowRealApp(true)
      }
      render() {
        if (state.showRealApp) {
          return <App/>;
        } else {
          return <AppIntroSlider renderItem={renderItem} data={slides} onDone={_onDone}/>;
        }
      }
    }
    const style = StyleSheet.create({
        slide:{
            flex:1,
            justifyContent:'space-evenly',
            alignItems:'center',
        },
        title:{
            fontSize:30,
        },
        text:{
         fontSize:20,
        }
    })