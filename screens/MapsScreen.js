import React from "react";
import MapView from "react-native-maps";
import { Header } from "react-native-elements";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: "LOCALIZAR VETERINARIO",
            style: {
              color: "#2C2C2C",
              fontSize: 20,
              justifyContent: "flex-start",
            },
          }}
          containerStyle={{
            backgroundColor: "#E7E7E7",
          }}
        />
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
