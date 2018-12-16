import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class DataScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Data Screen Page</Text>
        <Button
          title="Back to top"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default DataScreen;
