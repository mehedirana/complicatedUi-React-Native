import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header name="Search" />
            <Card>
                <Card.Title />

                      <View>
                           <View></View>
                           <View></View>
                           <View></View>
                      </View>
                      <View>

                      </View>
                    <Card.Content>
                    <Title>React Native</Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default SearchScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',


    }
});