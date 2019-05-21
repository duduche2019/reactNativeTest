import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import {Platform, StyleSheet, Text, View} from 'react-native';

export default class MovieDescription extends Component{
  constructor(props) {
    super(props)

    this.state= {
        movie: this.props.navigation.getParam('movie')
    }
}

    render() {
        const{movie}=this.state
        
        return(
            <View>
            <Text style={styles.titleTextP}>Voici votre film</Text>
            <Text> </Text>
            <Text style={styles.titleTextT}>Titre du film : {movie.title}</Text>
            <Text style={styles.titleTextI}>  </Text>
            <Text style={styles.titleText}>Année de parution : {movie.date}</Text>
            <Text style={styles.titleText}>Durée du film : {movie.dureeFilm}</Text>
            <Text style={styles.titleText}>Genre : {movie.genreFilm}</Text>
            <Text style={styles.titleText}>Réalisateur : {movie.realFilm}</Text>
            <Text style={styles.titleText}>Acteurs principaux : {movie.actprincFilm}</Text>
            <Text style={styles.titleText}>Nationalité : {movie.natioFilm}</Text>
            <Text> </Text>
            <Text style={styles.titleTextD}>Résumé : </Text>
            <Text style={styles.titleTextI}> </Text>
            <Text style={styles.titleTextR}>{movie.resumFilm}</Text>

        </View>)
  }
}
const styles = StyleSheet.create({
    
    titleTextP: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#7F2AFF',
        textAlign : 'center',
      },
    titleTextT: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
      },
      titleTextD: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
      },
    
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        
      },
      titleTextR: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign : 'justify',
      },
      titleTextI: {
        fontSize: 8,
        
      },
      titleTextI2: {
        fontSize: 4
        
      }
      
  });