import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Authentication/LoginScreen";
import HomeScreen from "./components/Home/HomeScreen";
import DataScreen from "./components/Data/DataScreen";
import SignUpScreen from "./components/Authentication/SignUpScreen";
import * as firebase from "firebase";
import Lava from "./components/Constants/Lava";

// Added pages in Stack Navigator
const MainAppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Home: HomeScreen
});

const RootAppStackNavigator = createStackNavigator({
  Data: DataScreen
});

// Container where all pages saved for navigation
const MainAppContainer = createAppContainer(MainAppStackNavigator);
const RootAppContainer = createAppContainer(RootAppStackNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserAutheticated: false
    };

    // Firebase Constructor
    if (!firebase.apps.length) {
      firebase.initializeApp(Lava.fireBaseConfiguration);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({
      isUserAutheticated: !!user
    });
  };

  render() {
    return (
      <View>
        {this.state.isUserAutheticated ? (
          <MainAppContainer />
        ) : (
          <RootAppContainer />
        )}
      </View>
    );
  }
}
