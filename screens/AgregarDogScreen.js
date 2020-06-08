import * as React from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { Footer, FooterTab } from "native-base";

export default function AgregarDogScreen({ navigation }) {
  const [vnom, setText] = React.useState("");
  console.log("Nombre :", vnom);
  const [vraza, setText1] = React.useState("");
  console.log("Raza", vraza);
  const [vedad, setText2] = React.useState("");
  console.log("Edad", vedad);

  return (
    <ScrollView>
      <View>
        <Card
          title="Nuevo perro"
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 0,
          }}
        >
          <View style={{ alignItems: "center", padding: 40 }}>
            <Avatar rounded size="xlarge" showEditButton />
          </View>

          <Input
            style={{ padding: 40 }}
            placeholder="Nombre"
            onChangeText={(vnom) => setText(vnom)}
            defaultValue={vnom}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />

          <Input
            placeholder="Raza"
            onChangeText={(vraza) => setText1(vraza)}
            defaultValue={vraza}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />
          <Input
            placeholder="Edad"
            onChangeText={(vedad) => setText2(vedad)}
            defaultValue={vedad}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />
          <Button
            containerStyle={{
              alignItems: "center",
              justifyContent: "flex-end",
              padding: 30,
            }}
            title="Guardar"
            type="outline"
            icon={<Icon name="done" />}
            iconRight
            buttonStyle={styles.buttonAdd}
          />
        </Card>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
