import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';

const SearchScreen = ({navigation})=>{
 return(
     <View style={styles.container}>
         <Header name="Search"/>
         <Text>hi i m search View</Text>
     </View>
 )
}

export default SearchScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    //   justifyContent:'center',
    //   alignItems:'center'
    
    },
  });