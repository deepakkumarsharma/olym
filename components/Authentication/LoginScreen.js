import React, { Component } from "react";
import * as firebase from "firebase";
import { Text, View, Button, TextInput, StyleSheet, Alert } from "react-native";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  onButtonPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.props.navigation.navigate("DataScreen");
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };

  createNewUserAccount = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  handleHomeRequest = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login Screen Page</Text>
        <TextInput
          placeholder="Enter Email"
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text });
          }}
          style={styles.textInputConteiner}
        />
        <TextInput
          placeholder="Enter Password"
          value={this.state.password}
          onChangeText={text => {
            this.setState({ password: text });
          }}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInputConteiner}
        />
        <Button title="Login" onPress={() => this.onButtonPress()} />
        <Text> </Text>
        <Button
          title="Create New Account"
          onPress={() => this.createNewUserAccount()}
        />
        <Text> </Text>
        {/* Button to go back to home page */}
        <Button onPress={() => this.handleHomeRequest()} title="Home Screen" />
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
  textInputConteiner: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});

export default LoginScreen;
