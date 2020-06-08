import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import CardAcord from "./CardAcord";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
} from "native-base";

export default function Tutoriales({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <Content>
          <View>
            <CardAcord>{"Cuidados Basicos"}</CardAcord>
            <CardAcord>{"Cuidados de Salud"}</CardAcord>
            <CardAcord>{"Cuidados Alimenticios"}</CardAcord>
            <CardAcord>{"Cuidados de higiene"}</CardAcord>
            <CardAcord>{"Tutoriales"}</CardAcord>
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
          <Button onPress={() => navigation.navigate("Menu")} active>
            <Icon name="menu" />
            <Text>Menu</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
