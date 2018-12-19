import React, { Component } from "react";
import { Text, View, Button, FlatList, ScrollView, Image } from "react-native";
import * as firebase from "firebase";

class DataScreen extends Component {
  state = {
    albumId: undefined,
    title: undefined,
    imageUrl: undefined,
    imageThumbnailUrl: undefined,
    currentUser: undefined
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

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

  render() {
    const { currentUser } = this.state;
    return (
      <View>
        {/* SHOW UserName and Email */}
        <Text>Welcome {currentUser && currentUser.email}!</Text>
        <FlatList
          data={this.state.final_json_result}
          renderItem={(
            { item } // Show final result of screen
          ) => (
            <ScrollView>
              <Text>{item.title}</Text>
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={{ height: 200, width: 200 }}
                resizeMode="contain"
              />
            </ScrollView>
          )} //
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default DataScreen;
