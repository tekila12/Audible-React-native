import React from 'react'
import {ImageBackground} from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
const Home = () => {

    const image = { uri: "https://i.insider.com/603e6a5a87d37600190d0a6c?width=700" };
    
    return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.textColor}>
        Thousands of new listens available now. Rediscover Audible today
      </Text>
      <TouchableOpacity onPress={() => {
        }} style={styles.button}>
        <Text style={{color:'white'}}>Join Now</Text>
      </TouchableOpacity>  
    </ImageBackground>
    )
}


const styles = StyleSheet.create({
    

    textColor: {
    color: 'dimgray',
    width: 250,
    fontSize: 15,
    fontWeight:"700",
    marginTop: 35,
    },


    button: {
    alignItems: "center",
    backgroundColor: "#d2691e",
    padding: 10,
    width: 100,
    marginTop: 10,
    },

    image: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
    },
  
  });
export default Home
