import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Header from './components/Header';
import SearchScreen from './components/SearchScreen';
import HomeScreen from './components/HomeScreen'
import ViewHolder from './components/ViewHolder';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="Search" component={SearchScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  mycard:{
    marginBottom:10,
    elevation:4,
  }
});
