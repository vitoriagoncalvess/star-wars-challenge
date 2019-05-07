/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela principal
    Data:29/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';


export default class Home extends Component {

  films = () => {
    this.props.navigation.navigate('Films');
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('../img/logo.png')}
               style={styles.imgLogo}/>
        <TouchableOpacity onPress={this.films}>
          <Image source={require('../img/loadind.gif')}
                style={styles.gifLoading}/>
          <Text style={styles.textoLoading}>Loading...</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  imgLogo:{
    width: 318,
    height: 191,
    marginTop: 39
  },
  gifLoading:{
    width: 55,
    height: 55,
    marginTop: 110
  },
  textoLoading:{
    width: 53,
    height: 16,
    fontFamily:'Bitstream Vera Sans Mono',
    fontWeight: 'bold',
    fontSize: 12,
    color:'#fff',
    marginTop: 15
  }

});
