import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { View } from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <View>
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
        chevron={{ color: "dark" }}
        onPress={() => navigation.navigate("Links")}
      />
      <ListItem
        leftIcon={<Icon name="alarm" />}
        title={" Recordatorios"}
        bottomDivider
        chevron
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
        onPress={() => navigation.navigate("Login")}
        bottomDivider
        chevron
      />
    </View>
  );
}
