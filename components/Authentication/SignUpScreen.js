import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import * as firebase from "firebase";
import { Button } from "react-native-paper";

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
        <View style={styles.formContainer}>
          <Text style={styles.signUpTagline}>Join Mylo</Text>
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
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            icon="send"
            color="#2196f3"
            onPress={() => this.handleSubmit()}
          >
            Submit
          </Button>
          <Button
            mode="contained"
            icon="face"
            color="#2196f3"
            onPress={() => this.backToLoginPage()}
          >
            Already have an account?
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
  signUpTagline: {
    fontSize: 60,
    fontFamily: "Roboto",
    paddingBottom: 20
  },
  formContainer: {
    flex: 3,
    backgroundColor: "#2196f3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textInputConteiner: {
    height: 40,
    width: "90%",
    borderColor: "#212121",
    borderBottomWidth: 1,
    marginTop: 8,
    textAlign: "left"
  }
});
