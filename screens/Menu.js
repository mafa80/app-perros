import React from "react";
import { ListItem, Icon, Header } from "react-native-elements";
import { View } from "react-native";
import firebase from "firebase";
export default function MenuScreen({ navigation }) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          navigation.navigate("var");
        } else {
          navigation.navigate("Login");
        }
      }.bind(this)
    );
  };
  checkIfLoggedIn();
  return (
    <View>
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
      <ListItem
        leftIcon={<Icon name="person" />}
        title={" Perfil"}
        onPress={() => navigation.navigate("Perfil")}
        bottomDivider
        chevron
      />
      <ListItem
        leftIcon={<Icon name="pets" />}
        title={" Mis perros"}
        bottomDivider
        chevron={{ color: "red" }}
        onPress={() => navigation.navigate("Links")}
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
    </View>
  );
}
