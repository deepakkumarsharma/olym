import React, { Component } from "react";
import * as firebase from "firebase";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";

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
        <View style={styles.textContainer}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            style={styles.textInputContainer}
            placeholder="Enter Email Address"
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <Text> </Text>
          <TextInput
            style={styles.textInputContainer}
            placeholder="Enter Password"
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.mainLoginButton}>
          <Button
            icon="account-circle"
            color="#444"
            mode="outlined"
            onPress={() => this.onButtonPress()}
          >
            Login
          </Button>
        </View>
        <Text> </Text>
        <View style={styles.buttonContainer}>
          <Button
            icon="lock"
            mode="contained"
            color="#2196f3"
            onPress={() => this.createNewUserAccount()}
          >
            new account?
          </Button>
          <Text> </Text>
          {/* Button to go back to home page */}
          <Button
            icon="account-balance"
            mode="contained"
            color="#2196f3"
            onPress={() => this.handleHomeRequest()}
          >
            Home Screen
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
  textContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196f3"
  },
  mainLoginButton: {},
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  loginText: {
    fontSize: 60,
    fontFamily: "Roboto",
    paddingBottom: 20
  },
  textInputContainer: {
    height: 40,
    width: "90%",
    borderColor: "#212121",
    borderBottomWidth: 1,
    marginTop: 8,
    textAlign: "left"
  }
});

export default LoginScreen;
