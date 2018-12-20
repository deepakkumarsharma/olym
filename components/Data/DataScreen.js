import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

class DataScreen extends Component {
  state = {
    albumId: undefined,
    title: undefined,
    imageUrl: undefined,
    imageThumbnailUrl: undefined
  };

  componentWillMount() {
    this.fetchMyloTaskData();
  }

  fetchMyloTaskData = async () => {
    const api_call = await fetch("https://jsonplaceholder.typicode.com/photos");
    const api_call_to_json = await api_call.json();

    this.setState({
      final_json_result: api_call_to_json
    });
  };

  handleSignOut() {
    this.props.navigation.navigate("HomeScreen");
  }

  render() {
    return (
      <View>
        {/* Sign Out Button */}
        <Button
          style={styles.buttonDesign}
          mode="contained"
          onPress={() => this.handleSignOut()}
        >
          Sign Out
        </Button>
        {/* FlatList of data */}
        <FlatList
          data={this.state.final_json_result}
          renderItem={(
            { item } // Show final result of screen
          ) => (
            <ScrollView>
              <Card style={styles.surfaceElevation}>
                <Card.Cover source={{ uri: item.url }} />
                <Text>{"\n"}</Text>
                <Card.Content>
                  <Title>Album Number : {item.albumId}</Title>
                  <Paragraph>{item.title}</Paragraph>
                </Card.Content>
              </Card>

              <Text>
                {"\n"}
                {"\n"}
              </Text>
            </ScrollView>
          )} //
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonDesign: {
    backgroundColor: "#1976d2",
    padding: 20,
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    textAlign: "center"
  },
  surfaceElevation: {
    elevation: 9
  }
});

export default DataScreen;
