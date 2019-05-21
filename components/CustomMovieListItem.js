import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

/**
 * export default class CustomMovieListItem extends Component{
    render(){
        const {title, date, imgSrc} = this.props
        return(
            <View style {{flex-direction: 'row'}}>
                <Image source={imgSrc} style={{width:80,height:80, margin:15}}></Image>
                <View style={{margin:15}}>
                    <Text style={{fontsize:22}}>{title}</Text>
                    <Text>{date}</Text>
                </View>
            </View>
        )
    }
}
 */


export default class CustomMovieListItem extends Component{
    render(){
        
        const { item, onItemClick } = this.props
        //const {title, date, imgSrc} = this.props
        return(
        <TouchableOpacity onPress={()=> onItemClick(item)}>
           <View style={styles.container}>
               <Image source={item.imgSrc} style= {styles.image}></Image>
               <View style= {styles.infosRightSide}>
                   <Text style= {styles.title}>{item.title} </Text>
                   <Text>{item.date}</Text>


               </View>
           </View>
       </TouchableOpacity>
            /*
            <View style={styles.container}>
               <Image source={imgSrc} style= {styles.image}></Image>
               <View style= {styles.infosRightSide}>
                   <Text style= {styles.title}>{title} </Text>
                   <Text>{date}</Text>
               </View>
           </View>*/
        )
    }
}

const styles = {
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
        frontSize: 22,
        textAlign: 'justify',
        color: '#7F2AFF'
    }
 
 }