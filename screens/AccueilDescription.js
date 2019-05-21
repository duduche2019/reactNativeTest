import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import {Platform, StyleSheet, Text, View} from 'react-native';

export default class AccueilDescription extends Component{
  constructor(props) {
    super(props)

    this.state= {
        accueil: this.props.navigation.getParam('accueil')
    }
}

    render() {
        const{accueil}=this.state
        
        return(
            <View>
            <Text></Text>
            <Text></Text>
            <Text style={styles.titleTextH4}>Voici</Text>
            <Text></Text>
            <Text style={styles.titleTextH1}>SeBoMo</Text>
            <Text></Text>
            <Text style={styles.titleTextp}>  {accueil.descrpt}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.titleTextH4}>  {accueil.mestypes}</Text>
            </View>)
  }
}
const styles = StyleSheet.create({
    
    titleTextH4: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#7F2AFF',
        textAlign : 'center',
    },
    titleTextH1: {
        fontSize: 55,
        fontWeight: 'bold',
        color: 'magenta',
        textAlign : 'center',
    },
    titleTextp: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'brown',
        textAlign : 'center',
    },
      titleTextD: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
    },
  });