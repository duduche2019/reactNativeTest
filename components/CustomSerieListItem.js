import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

export default class CustomSerieListItem extends Component {

    render() {

      const {item, onItemClick} = this.props
      return (

          <TouchableOpacity onPress={()=>onItemClick(item)}>
            <View style={styles.container}>
                <Image source={item.imgSrc} style= {styles.image}></Image>
                <View style= {styles.infosRightSide}>
                    <Text style= {styles.title}>{item.titreSeries} </Text>
                    <Text>{item.diffusion}</Text>
                </View>
                
                
            </View>
            </TouchableOpacity>
      )
    }
}


const styles = {
    container: {
        flexDirection: 'row',
        padding: 15,
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
        frontSize: 25,
        color:'magenta',
        
    }
 
 }
 