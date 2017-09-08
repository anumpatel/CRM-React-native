/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';



const Loader = ({size}) => {
    return(
        <View style={styles.loaderStyle} >
            <ActivityIndicator size={size || 'small'} />
        </View>
    )
}


const styles = StyleSheet.create({
 loaderStyle:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
 }
}); 

export default Loader