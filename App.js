import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Login/LoginScreen";
import HomeScreen from "./components/Home/HomeScreen";
import DataScreen from "./components/Data/DataScreen";

// Added pages in Stack Navigator
const AppStackNavigator = createStackNavigator({
  Data: DataScreen,
  Home: HomeScreen,
  Login: LoginScreen
});

// Container where all pages saved for navigation
const App = createAppContainer(AppStackNavigator);
export default App;
