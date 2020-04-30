import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import ViewHolder from './components/ViewHolder';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ImageBackground style={{ width: "100%", height: "60%" }} source={require('./mycurve.png')} resizeMode='stretch'>
                <TextInput style={{ borderRadius: 30, backgroundColor: 'white', height: 50, margin: 40, }} />
            </ImageBackground>
            <ViewHolder />
        </View>
    )
}
export default Home;