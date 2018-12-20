import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lineAndTagLine}>
          <Text style={styles.headerLine}>Mylo</Text>
          <Text style={styles.tagLine}>Invest your spare change.</Text>
        </View>
        <View style={styles.buttonMagic}>
          <Button
            style={styles.buttonUI}
            mode="contained"
            icon="account-circle"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            Login Screen
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  headerLine: {
    fontSize: 80,
    fontFamily: "Roboto",
    paddingBottom: 5,
    textAlign: "center"
  },
  tagLine: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 30
  },
  lineAndTagLine: {
    flex: 2,
    backgroundColor: "#2196f3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonMagic: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonUI: {
    backgroundColor: "#2196f3"
  }
});

export default HomeScreen;
