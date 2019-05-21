
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import  CustomSerieListItem from '../components/CustomSerieListItem';
import {serie} from '../components/DataSeries';

export default class Series extends Component{
  onItemClick= (item) => {
    this.props.navigation.navigate('SeriesDescription', {serie :item})
  } 
  render() {
     return (
        <View>
          <FlatList
            data={serie}
            renderItem={({item}) => <CustomSerieListItem item={item} onItemClick={this.onItemClick}/>}
          />
            
        </View>
      
    )
  }
}
  