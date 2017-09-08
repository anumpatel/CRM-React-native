/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import Login from './login'

export default class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "API KEY",
            authDomain: "Domain",
            databaseURL: "https://db.firebaseio.com",
            projectId: "prID",
            storageBucket: "",
            messagingSenderId: "SID"
        })
    }
 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CRM!
        </Text>
        <Login />
      </View>
    );
  }
}

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