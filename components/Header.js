import React from 'react';
import {Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


const Header = (props) =>{
    return (
      <Appbar.Header style={{backgroundColor:'white'}}>
        <Ionicons name="md-menu" size={34} color='#F86262' style={{marginLeft:10}} />
        <Text style={{marginLeft:20, fontSize:25, fontWeight:'bold',color:'#F86262'}}>{props.name}</Text>
      </Appbar.Header>
    );
 }


export default Header;