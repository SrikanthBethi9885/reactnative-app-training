import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
const ImageView = () => {
  return (
    <ScrollView Style={styles.container}>
      <View style={styles.view}>
        <Image source={require("../assets/Img1.png")} style={styles.image} />
         <Text style={styles.text}>A stylish bike parked in a  street</Text>
        <Image source={require("../assets/Img.2png.webp")} style={styles.image} />
        <Text style={styles.text}>This Sports Car published on 2019</Text>
        <Image source={require("../assets/Img3.png")} style={styles.image} />
        <Text style={styles.text}>  Meet your new furry friend!  looking at you with its 
        expressive eyes</Text>
        <Image source={require("../assets/Img4.png")} style={styles.image} />
        <Text style={styles.text}>The bird is powered by its own life and by its motivation. </Text>
        <Image source={require("../assets/Img5.png")} style={styles.image} />
        <Text style={styles.text}>This adorable Cat is looking straight </Text>
        <Image source={require("../assets/Img6.png")} style={styles.image} />
        <Text style={styles.text}>Rabbits are loyal and affectionate as dogs</Text>
        <Image source={require("../assets/Img7.png")} style={styles.image} />
        <Text style={styles.text}>A bicycle helps us to reach a destination without polluting the environment.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 10, 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
});

export default ImageView;
