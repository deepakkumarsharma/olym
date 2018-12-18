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
          Alert.alert("Log In Success");
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };

  createNewUserAccount = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <View>
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
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Home Screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputConteiner: {
    width: 200,
    height: 40,
    borderWidth: 1
  }
});

export default LoginScreen;
