import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import * as firebase from "firebase";

export default class SignUpScreen extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = () => {
    if (this.state.password != this.state.confirmPassword) {
      Alert.alert("Password didn't match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          Alert.alert("Sign Up Success");
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };

  backToLoginPage = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>
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

        <TextInput
          placeholder="Enter Password One More Time"
          value={this.state.confirmPassword}
          onChangeText={text => {
            this.setState({ confirmPassword: text });
          }}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInputConteiner}
        />

        <Button title="Submit" onPress={() => this.handleSubmit()} />
        <Button
          title="Already have an account?"
          onPress={() => this.backToLoginPage()}
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
  },
  textInputConteiner: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});
