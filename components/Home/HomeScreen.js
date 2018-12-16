import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Home Screen Page</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Login Screen"
        />
      </View>
    );
  }
}

export default HomeScreen;
