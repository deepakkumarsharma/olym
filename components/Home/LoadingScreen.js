import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
import Lava from "../Constants/Lava";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    // Firebase Constructor
    if (!firebase.apps.length) {
      firebase.initializeApp(Lava.fireBaseConfiguration);
    }
  }

  // User authentication check
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "HomeScreen" : "DataScreen");
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          Wait little more, it's almost done
        </Text>
        <ActivityIndicator size="large" color="#1976d2" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    textAlign: "center",
    fontSize: 20,
    padding: 35
  }
});
