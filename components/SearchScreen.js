import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import { Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from './CustomCard';

const SearchScreen = ({ navigation }) => {
    return (
        <View>
            <Header name="Search" />
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
        </View>
    )
}

export default SearchScreen;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f9f9f9',


//     }
// });