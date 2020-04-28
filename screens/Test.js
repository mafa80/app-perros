import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Card, CheckBox } from "react-native-elements";

import imagen from "../assets/images/examen.jpg";

import React, { Component } from "react";

export default class TestScreen extends Component {
  state = {
    poco: true,
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.containerRegister}>
            <Image source={imagen} style={styles.image} />
            <Text>PREGUNTA 1: </Text>
            <View>
              <CheckBox
                center
                title="respuesta 1"
                checked={this.state.poco}
                onPress={() => this.setState({ checked: !this.state.poco })}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  image: {
    height: 60,
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
    paddingTop: "2%",
    borderRadius: 12,
  },
  containerRegister: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
