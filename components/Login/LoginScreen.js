import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Login Screen Page</Text>
        {/* Button to go back to home page */}
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Home Screen"
        />
        {/* Button to go to data page */}
        <Button
          onPress={() => this.props.navigation.navigate("Data")}
          title="Data Screen"
        />
      </View>
    );
  }
}

export default LoginScreen;
