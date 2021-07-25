import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './Home';
import Login from './Login';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
const App = () => {
  enableScreens(true);
  const Stack = createStackNavigator();
  return (

   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
