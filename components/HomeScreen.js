import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Header from './Header';
import ViewHolder from './ViewHolder';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header name="Home" />
            <ImageBackground style={{ width: "100%", height: "60%" }} source={require('../mycurve.png')} resizeMode='stretch'>
                <TextInput style={{ borderRadius: 30, backgroundColor: 'white', height: 50, margin: 40, }} />
            </ImageBackground>
            <ViewHolder />
        </View>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
  });