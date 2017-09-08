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

import {MKTextField, MKColor, MKButton} from 'react-native-material-kit'

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();



export default class Login extends Component {
    state = {
        email : '',
        password: ''
    }

    onButtonPress(){
      console.log('Clicked Button!')
    }

  render() {
    const {form, fieldStyle, loginButtonArea, errorMessage, welcome, container} = styles
    return (
      <View style={container}>
        <Text style={welcome}>
          Welcome to CRM
        </Text>
        <MKTextField text={this.state.email} onTextChange={email => this.setState({email})} textInputStyle={fieldStyle}
          placeholder={'Email...'}
          tintColor={MKColor.Teal} />
          <MKTextField text={this.state.password} onTextChange={password => this.setState({password})} textInputStyle={fieldStyle}
          placeholder={'Password...'}
          tintColor={MKColor.Teal} password={true} />
          <Text style={errorMessage}> {this.state.error} </Text>
          <View style={loginButtonArea}> 
            <LoginButton onPress={this.onButtonPress.bind(this)} />
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  form: {
    paddingBottom: 10,
    width: 200
  },
  fieldStyle:{
    height : 40,
    color: MKColor.Amber,
    width: 200
  },
  loginButtonArea:{
    marginTop: 20,

  },

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
  }
});