import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import  CustomMovieListItem from '../components/CustomMovieListItem';
//import {movies} from '../components/DataMovies';
import {movies} from '../components/database/DataFilms';

export default class Movies extends Component{
  onItemClick= (item) => {
    this.props.navigation.navigate('MovieDescription', {movie :item})
  }
  render() {
    //return <View />
    //const {item}=this.props
    return (
      //<TouchableOpacity onPress={(item)=>this.onItemClick(item)}>
        <View>
          <FlatList
            
            data={movies}
            renderItem={({item}) => <CustomMovieListItem item={item} onItemClick={this.onItemClick}/>}
          />
            
        </View>
      //</TouchableOpacity>)
    )
  }
}
  /*const styles = {
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 80,
        height: 120,
        margin: 15,
    },
    infosRightSide: {
        margin: 15
    },
    title: {
        frontSize: 22
    }
  }*/
