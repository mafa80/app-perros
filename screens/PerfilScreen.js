import * as React from "react";
import { Avatar, Card } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { Input } from "react-native-elements";
import firebase from "firebase";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";
var correo = "";

export default function PerfilScreen({ navigation }) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          console.log(user.email);
          correo = user.email;
        } else {
          navigation.navigate("Login");
        }
      }.bind(this)
    );
  };

  firebase.database().ref("/users/" + user.uid);

  console.log("aqui va el correo", correo);

  checkIfLoggedIn();

  return (
    <Container>
      <ScrollView>
        <Content>
          <View>
            <Card
              containerStyle={{
                backgroundColor: "#ffffff",
                borderRadius: 0,
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center", padding: 40 }}>
                <Avatar
                  rounded
                  size="xlarge"
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                />
              </View>

              <View style={{ alignItems: "center", padding: 40 }}>
                <Text>correo : {correo}</Text>
                <Text>Perros: 2</Text>
                <Text>Citas: 0</Text>
              </View>
            </Card>
          </View>
        </Content>
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
