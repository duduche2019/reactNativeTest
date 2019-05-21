
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import  CustomBookListItem from '../components/CustomBookListItem';
import {books} from '../components/DataBooks';

export default class Books extends Component{
  onItemClick= (item) => {
    this.props.navigation.navigate('BookDescription', {books :item})
  } 
  render() {
     return (
        <View>
          <FlatList
            data={books}
            renderItem={({item}) => <CustomBookListItem item={item} onItemClick={this.onItemClick}/>}
          />
            
        </View>
      
    )
  }
}
  