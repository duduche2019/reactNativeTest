import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import {Platform, StyleSheet, Text, View} from 'react-native';

export default class BookDescription extends Component{
  constructor(props) {
    super(props)

    this.state= {
        books: this.props.navigation.getParam('books')
    }
}

    render() {
        const{books}=this.state
        
        return(
            <View>
                
            <Text style={styles.titleTextP}>Voici votre livre</Text>
            <Text></Text>
            <Text style={styles.titleTextT}>Titre du livre : {books.title}</Text>
            <Text style={styles.titleTextI}>  </Text>
            <Text style={styles.titleText}>Date de parution : {books.date}</Text>
            <Text style={styles.titleText}>Série : {books.serieLivre}</Text>
            <Text style={styles.titleText}>Genre : {books.genreLivre}</Text>
            <Text style={styles.titleText}>Auteur : {books.auteurLivre}</Text>
            <Text style={styles.titleText}>nombre de pages : {books.nombrePageLivre}</Text>
            <Text style={styles.titleText}>Editeur : {books.editeurLivre}</Text>
            <Text style={styles.titleText}>ISBN : {books.isbnLivre}</Text>
            <Text></Text>
            <Text style={styles.titleTextD}>Résumé : </Text>
            <Text style={styles.titleTextI2}>  </Text>
            <Text style={styles.titleTextR}>{books.resumeLivre}</Text>

        </View>)
  }
}
const styles = StyleSheet.create({
    
    titleTextP: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'brown',
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

/*
<Text>{movie.realFilm}</Text>
            <Text>{movie.actprincFilm}</Text>
            <Text>{movie.resumFilm}</Text>*/