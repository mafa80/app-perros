import React from "react";
import MapView from "react-native-maps";
import { Header } from "react-native-elements";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";

export default class MapsScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  };
  Menu = () => {
    this.props.navigation.navigate("Menu");
  };
  Mapas = () => {
    this.props.navigation.navigate("Mapas");
  };
  Perros = () => {
    this.props.navigation.navigate("Perros");
  };
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status != "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log("Error:", error)
    );
  }

  getUrlWithParameters(latitude, longitude, API) {
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const localitation = `location=${latitude},${longitude}&radius=500`;
    const typeData = `&types=veterinario`;
    const key = `&key=AIzaSyCnebIjn396xPqbd0Gz5CjwV9BtU-YEz5A`;
  }

  render() {
    const key = "AIzaSyCnebIjn396xPqbd0Gz5CjwV9BtU-YEz5A";
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 0.922,
            longitude: 0.0421,
            latitudeDelta: 0.922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
      );
    }
    return (
      <View style={styles.container}>
        <Text> no tengo acceso aa tu ubicacioon </Text>
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={this.Perros}>
              <Icon name="ios-paw" />
              <Text>Mis perros</Text>
            </Button>
            <Button onPress={this.Mapas} active>
              <Icon name="map" />
              <Text>Veterinarios</Text>
            </Button>
            <Button onPress={this.Menu}>
              <Icon name="menu" />
              <Text>Menu</Text>
            </Button>
          </FooterTab>
        </Footer>
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
});
