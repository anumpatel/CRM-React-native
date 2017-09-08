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
import firebase from 'firebase'
import Loader from './loader'

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();



export default class Login extends Component {
    state = {
        email : '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress(){
      const {email, password} = this.state
      this.setState({error :'', loading:true})

      firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onAuthSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onAuthSuccess.bind(this))
            .catch(this.onAuthFail.bind(this))
        })
    }
    

    onAuthSuccess(){
      this.setState({
        email : '',
        password: '',
        error: '',
        loading: false
      })
    }

    onAuthFail(){
      this.setState({
        error:'Authentication Failed!',
        loading : false
      })
    }

    renderLoader(){
      if (this.state.loading){
        return <Loader size="large"/>
      }else{
        return <LoginButton onPress={this.onButtonPress.bind(this)} />
      }
    }

  render() {
    const {form, fieldStyle, loginButtonArea, errorMessage, welcome, container} = styles
    return (
      <View style={form}>
        <Text>
          Login / Create an Account!
        </Text>
        <MKTextField text={this.state.email} onTextChange={email => this.setState({email})} textInputStyle={fieldStyle}
          placeholder={'Email...'}
          tintColor={MKColor.Teal} />
          <MKTextField text={this.state.password} onTextChange={password => this.setState({password})} textInputStyle={fieldStyle}
          placeholder={'Password...'}
          tintColor={MKColor.Teal} password={true} />
          <Text style={errorMessage}> {this.state.error} </Text>
          <View style={loginButtonArea}> 
            {this.renderLoader()}
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
  errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center'
  }
});