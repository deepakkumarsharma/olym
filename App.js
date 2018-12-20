import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Authentication/LoginScreen";
import HomeScreen from "./components/Home/HomeScreen";
import LoadingScreen from "./components/Home/LoadingScreen";
import DataScreen from "./components/Data/DataScreen";
import SignUpScreen from "./components/Authentication/SignUpScreen";

// https://stackoverflow.com/questions/53827579/react-native-navigation-problem-for-user-authentication-with-firebase?noredirect=1#comment94503912_53827579
// https://reactnavigation.org/docs/en/auth-flow.html

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
