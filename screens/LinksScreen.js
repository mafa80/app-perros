import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Avatar, Icon, Button, Card } from "react-native-elements";

const list = [
  {
    name: "firulais",
    imagen:
      "https://i.ibb.co/kqTrRSR/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
    descripcion: "      Es jugueton ",
  },
  {
    name: "Mr Croquetas",
    imagen: "https://i.ibb.co/FYbr5B9/razas-perro-pequenos-grandes-m.jpg",
    descripcion: "     Es enojon ",
  },
];

export default function LinksScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Button
          containerStyle={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          title="Agregar nuevo perro"
          type="outline"
          icon={<Icon name="add" />}
          iconRight
          buttonStyle={styles.buttonAdd}
        />
        {/* aqui va el map */}

        {list.map((l, i) => (
          <Card
            key={i}
            title={l.name}
            containerStyle={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar size="large" source={l.imagen} rounded />
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Text>{l.descripcion} </Text>
              </View>
              <Button
                containerStyle={{ position: "absolute", right: 5, top: 5 }}
                buttonStyle={styles.buttonEdit}
                icon={<Icon name="create" />}
              />
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  buttonEdit: {
    borderRadius: 10,
    marginLeft: -2,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "#FBF8EF",
  },
  buttonAdd: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});
