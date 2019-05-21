/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import Movies from './screens/Movies'
import Books from './screens/Books'
import Series from './screens/Series'
import Accueil from './screens/Accueil'
//import VideoGames from './screens/VideoGames'
//import Books from './screens/Books'
import MovieDescription from './screens/MovieDescription'
import BookDescription from './screens/BookDescription'
import SeriesDescription from './screens/SeriesDescription'
import AccueilDescription from './screens/AccueilDescription'

const TabNavigator = createBottomTabNavigator({
  Accueil:Accueil,
  Movies:Movies,
  Series:Series,
  //VideoGames:VideoGames,
  Books:Books,
  //Settings:SettingScreen
  
});

const StackNavigator= createStackNavigator({
  Home:{screen:TabNavigator},
  MovieDescription:{screen:MovieDescription},
  BookDescription:{screen:BookDescription},
  SeriesDescription:{screen:SeriesDescription},
  AccueilDescription:{screen:AccueilDescription}
})
export default createAppContainer(StackNavigator);
/*
export default class App extends Component{
  render() {
    
  }
}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 });
