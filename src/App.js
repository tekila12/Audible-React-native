/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View style={styles.container}>

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={{width:'50%'}}style={styles.textColor}>
        Thousands of new listens available now. Rediscover Audible today
      </Text>
      <TouchableOpacity style={{ backgroundColor:"black", color:"#d2691e", width:"50%", height: 40, marginTop: 10 }}>
        <Text>Join Now</Text>
      </TouchableOpacity>  
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  textColor: {
    color: '#f0f',
  },
   image: {
    flex: 1,
    justifyContent: "center"
  },

});

export default App;
