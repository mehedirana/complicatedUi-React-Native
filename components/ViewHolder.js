import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import Header from './components/Header';
import { Card, Title } from 'react-native-paper';

const ViewHolder = () =>{

    return(
        <View style={{flex:1, flexDirection:'row', marginTop:"-35%", justifyContent:'space-around'}}>
         <View>
          <Card style={styles.mycard}>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card style={styles.mycard}>
            <Card.Title />
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card style={styles.mycard}>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
        </View>
         <View>
          <Card style={styles.mycard}>
            <Card.Title />
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card style={styles.mycard}>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
          <Card style={styles.mycard}>
            <Card.Title/>
            <Card.Content>
              <Title>React Native</Title>
            </Card.Content>

          </Card>
        </View>
      </View>
    )
}
export default ViewHolder;

const styles = StyleSheet.create({
    mycard:{
      marginBottom:10,
      elevation:4,
    }
  });