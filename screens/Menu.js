import React from "react";
import { ListItem, Header } from "react-native-elements";
import { View, Text } from "react-native";
import firebase from "firebase";
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Container,
  Content,
} from "native-base";

export default function MenuScreen({ navigation }) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          navigation.navigate("Menu");
        } else {
          navigation.navigate("Login");
        }
      }.bind(this)
    );
  };
  checkIfLoggedIn();
  return (
    <Container>
      <Header
        centerComponent={{
          text: "MENU",
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
      <Content>
        <ListItem
          leftIcon={<Icon name="person" />}
          title={" Perfil"}
          onPress={() => navigation.navigate("Perfil")}
          bottomDivider
          chevron
        />
        <ListItem
          leftIcon={<Icon name="ios-paw" />}
          title={" Mis perros"}
          bottomDivider
          chevron={{ color: "red" }}
          onPress={() => navigation.navigate("Perros")}
        />
        <ListItem
          leftIcon={<Icon name="alarm" />}
          title={" Recordatorios"}
          bottomDivider
          chevron
          onPress={() => navigation.navigate("Calendario")}
        />
        <ListItem
          leftIcon={<Icon name="fitness-center" />}
          title={" Entrenamiento"}
          bottomDivider
          onPress={() => navigation.navigate("Tutoriales")}
          chevron
        />
        <ListItem
          leftIcon={<Icon name="help" />}
          title={" Ayuda"}
          bottomDivider
          chevron
        />

        <ListItem
          containerStyle={{ backgroundColor: "#FF6B4B" }}
          title={"Cerrar sesion"}
          onPress={() => firebase.auth().signOut()}
          bottomDivider
          chevron
        />
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={() => navigation.navigate("Perros")}>
            <Icon name="ios-paw" />
            <Text>Mis perros</Text>
          </Button>
          <Button onPress={() => navigation.navigate("Mapas")}>
            <Icon name="map" />
            <Text>Veterinarios</Text>
          </Button>
          <Button active onPress={() => navigation.navigate("Menu")}>
            <Icon name="menu" />
            <Text>Menú</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
