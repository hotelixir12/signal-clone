import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from './Screens/LogInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createStackNavigator();

const globalScreenOptions={

  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={globalScreenOptions}>
       
        <Stack.Screen
        options={{
          title:"SIGNAL",
        }}
        name ="Login" component={LogInScreen}/>

        <Stack.Screen name="Register" component= {RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
