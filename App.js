import React, { Component } from "react";
import { View } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Authentication/LoginScreen";
import HomeScreen from "./components/Home/HomeScreen";
import LoadingScreen from "./components/Home/LoadingScreen";
import DataScreen from "./components/Data/DataScreen";
import SignUpScreen from "./components/Authentication/SignUpScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      HomeScreen,
      SignUpScreen,
      LoginScreen,
      DataScreen
    },
    {
      initialRouteName: "LoadingScreen"
    }
  )
);
