import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Login/LoginScreen";
import HomeScreen from "./components/Home/HomeScreen";
import DataScreen from "./components/Data/DataScreen";

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Data: DataScreen
});

const App = createAppContainer(AppStackNavigator);
export default App;
