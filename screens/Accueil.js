import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import  CustomAccueilListItem from '../components/CustomAccueilListItem';
import {accueil} from '../components/database/DataAccueil';

export default class Accueil extends Component{
  onItemClick= (item) => {
    this.props.navigation.navigate('AccueilDescription', {accueil :item})
  }
  render() {
    //return <View />
    //const {item}=this.props
    return (
      //<TouchableOpacity onPress={(item)=>this.onItemClick(item)}>
        <View>
          <FlatList
            
            data={accueil}
            renderItem={({item}) => <CustomAccueilListItem item={item} onItemClick={this.onItemClick}/>}
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
