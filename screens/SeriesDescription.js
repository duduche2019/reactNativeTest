import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SeriesDescription extends Component{
  constructor(props) {
    super(props)

    this.state= {
        serie: this.props.navigation.getParam('serie')
    }
}

    render() {
        const{serie}=this.state
        
        return(
            <View>
            <Text style={styles.titleTextP} >Voici votre série</Text>
            <Text> </Text>
            <Text  style={styles.titleTextT}>Titre de la série : {serie.titreSeries}</Text>
            <Text style={styles.titleTextI}> </Text>
            <Text style={styles.titleText}>Date de parution : {serie.diffusion}</Text>
            <Text style={styles.titleText}>Genre : {serie.genreSerie}</Text>
            <Text style={styles.titleText}>Acteur Principaux : {serie.actprincSerie}</Text>
            <Text style={styles.titleText}>Nombre d'épisodes : {serie.episode}</Text>
            <Text style={styles.titleText}>Durée d'un épisode : {serie.dureeSerie}</Text>
            <Text style={styles.titleText}>Nationalité  : {serie.natioSerie}</Text>
            <Text> </Text>
            <Text style={styles.titleTextD}>Résumé : </Text>
            <Text style={styles.titleTextI}> </Text>
            <Text style={styles.titleTextR}>{serie.resumSerie}</Text>
            

        </View>)
  }
}

const styles = StyleSheet.create({
    
    titleTextP: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'magenta',
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
        
      }
      
  });
/*
<Text>{movie.realFilm}</Text>
            <Text>{movie.actprincFilm}</Text>
            <Text>{movie.resumFilm}</Text>*/