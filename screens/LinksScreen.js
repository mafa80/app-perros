import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Avatar, Card, Header } from "react-native-elements";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";
const list = [
  {
    name: "firulais",
    Imagen:
      "https://i.ibb.co/kqTrRSR/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
    descripcion: "      Es jugueton ",
  },
  {
    name: "Mr Croquetas",
    imagen: "https://i.ibb.co/FYbr5B9/razas-perro-pequenos-grandes-m.jpg",
    descripcion: "     Es enojon ",
  },
  {
    name: "Mr Croquetas",
    imagen: "https://i.ibb.co/FYbr5B9/razas-perro-pequenos-grandes-m.jpg",
    descripcion: "     Es enojon ",
  },
  {
    name: "Mr Croquetas",
    imagen: "https://i.ibb.co/FYbr5B9/razas-perro-pequenos-grandes-m.jpg",
    descripcion: "     Es enojon ",
  },
];

export default function LinksScreen({ navigation }) {
  if (list) {
    console.log("que onda rza");
  } else {
    console.log("que onda rza  enn else");
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header
          centerComponent={{
            text: "MIS PERROS",
            style: {
              color: "#2C2C2C",
              fontSize: 20,
            },
          }}
          containerStyle={{
            backgroundColor: "#E7E7E7",
            height: "7%",
          }}
        />
        <Content>
          <View>
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{ color: "blue", fontWeight: "bold", padding: 20 }}
                onPress={() => navigation.navigate("AgregarDogScreen")}
              >
                {" "}
                Agregar nuevo perro
              </Text>
            </View>
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
                  <Avatar size="large" source={{ uri: l.Imagen }} rounded />
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
        </Content>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button active>
            <Icon name="ios-paw" />
            <Text>Mis perros</Text>
          </Button>
          <Button>
            <Icon name="map" />
            <Text>Veterinarios</Text>
          </Button>
          <Button>
            <Icon name="menu" />
            <Text>Menu</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
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
