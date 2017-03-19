import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
// import * as firebase from "firebase";
import { Header, Button, Spinner, CardSection } from './components/common';
import  LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      {
    apiKey: "AIzaSyAOn9XucdiAiaqPqxKG18z8NB9jWW8S5aU",
    authDomain: "auth-b8aca.firebaseapp.com",
    databaseURL: "https://auth-b8aca.firebaseio.com",
    storageBucket: "auth-b8aca.appspot.com",
    messagingSenderId: "157202118202"
  });
  firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       this.setState({ loggedIn: true });
     } else {
       this.setState({ loggedIn: false });
     }
   });
  }
  renderContent() {
    switch(this.state.loggedIn){
      case true:
      return(
        <CardSection>
          <Button onPress={ () => { firebase.auth().signOut()}}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{paddingTop: 30}}>
            <Spinner size="large" />
          </View>
        );
    }
    };

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}
const styles = {
  conteinerStyle: {
    flex:1,
    justifyContent: 'center'
  }
}
export default App;
