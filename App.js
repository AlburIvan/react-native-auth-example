import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm  from './src/components/LoginForm';



export default class App extends Component {

  componentWillMount() {

    firebase.initializeApp({
        apiKey: "AIzaSyBw2mcq1HwPoSUxHd86h4VRHv3ZAFOogAY",
        authDomain: "react-native-auth-exampl-aefd1.firebaseapp.com",
        databaseURL: "https://react-native-auth-exampl-aefd1.firebaseio.com",
        projectId: "react-native-auth-exampl-aefd1",
        storageBucket: "react-native-auth-exampl-aefd1.appspot.com",
        messagingSenderId: "847360186961"
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
