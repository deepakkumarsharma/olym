import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerLine}>Mylo</Text>
        <Text style={styles.tagLine}>Invest your spare change.</Text>
        <Button
          style={styles.buttonUI}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
          title="Login Screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignTexts: "center",
    justifyContent: "center"
  },
  headerLine: {
    fontSize: 60,
    fontFamily: "Roboto",
    paddingBottom: 5,
    textAlign: "center"
  },
  tagLine: {
    textAlign: "center",
    fontSize: 19,
    paddingBottom: 30
  }
});

export default HomeScreen;
