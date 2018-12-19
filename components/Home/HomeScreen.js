import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Screen Page</Text>
        <Button
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
