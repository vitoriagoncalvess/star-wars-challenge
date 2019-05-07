/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Films
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Films extends Component {

  filmsDetails = () => {
    this.props.navigation.navigate('FilmsDetails');
  }

  character = () => {
    this.props.navigation.navigate('Character');
  }

  

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <Text style={styles.textHeader}>Star Wars</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.titleContent}>Filmes</Text>

            <View style={styles.films}>
                <View style={styles.filmsItems}>
                  <TouchableOpacity onPress={this.filmsDetails}>
                    <Image source={require('../img/testeFilme.jpeg')}
                    style={styles.imgFilmsItems}/>
                  </TouchableOpacity>
                  <Text style={styles.titleFilms}>The Plantom Menace</Text>
                </View>

                <View style={styles.filmsItems}>
                  <Image source={require('../img/testeFilme.jpeg')}
                  style={styles.imgFilmsItems}/>
                  <Text style={styles.titleFilms}>The Plantom Menace</Text>
                </View>
            </View>

        </View>

        <View style={styles.nav}>

          <TouchableOpacity onPress={this.character}>
            <View style={styles.navItems}>
              <Icon name = "ios-person"  size={20} color={'#ffe81f'}/>
              <Text style={styles.textNav}>Character</Text>
            </View>
          </TouchableOpacity>

          
          <View style={styles.navItems}>
            <Icon name="ios-videocam" size={20} color={'#ffe81f'}/>
            <Text style={styles.textNav}>Movies</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    width:360,
    height:80,
    borderBottomColor: '#ffe81f',
    borderBottomWidth: 0.34,
    alignItems:'center'
  },
  textHeader:{
      color:'#ffe81f',
      fontSize:20,
      paddingTop:35
  },
  content:{
      width:360,
      height:545,
      backgroundColor:'#000',
      padding: 20
  },
  titleContent:{
      color:'#fff',
      fontSize:20,
  },
  films:{
    width:320,
    height:490,
    marginTop:10,
    flexDirection: 'row'
  },
  filmsItems:{
      width:150,
      height:290,
      marginRight:20,
      borderRadius:6,
      backgroundColor:'#fff'
  },
  imgFilmsItems:{
    width:150,
    height:240
  },
  titleFilms:{
    color:'#000',
    padding:5,
    fontSize:15,
    textAlign:'center'
  },
  nav:{
    width:360,
    height:60,
    flexDirection: 'row',
    borderTopColor: '#ffe81f',
    borderTopWidth: 0.34,
  },
  navItems:{
    width:180,
    height:56,
    alignItems:'center',
    padding:15
  },
  imgNav:{
    width:10,
    height:10,
  },
  textNav:{
    color:'#ffe81f',
  }
});
