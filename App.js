import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Header from './components/Header';
import { Card, Title } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground style={{ width: "100%", height: "60%" }} source={require('./mycurve.png')} resizeMode='stretch'>
        <TextInput style={{ borderRadius: 30, backgroundColor: 'white', height: 50, margin: 40, }} />
      </ImageBackground>

      <View>
         <View>
          <Card>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card>
            <Card.Title />
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
        </View>
         <View>
          <Card>
            <Card.Title />
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
