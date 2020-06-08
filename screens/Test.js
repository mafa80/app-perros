import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
7;

import React, { useState } from "react";
import imagen from "../assets/images/examen.jpg";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  Button,
} from "native-base";

export default function TestScreen() {
  const [resp1, setText1] = useState("a");

  const [resp2, setText2] = useState("a");
  const [resp3, setText3] = useState("a");
  const [resp4, setText4] = useState("a");
  const [resp5, setText5] = useState("a");
  const [resp6, setText6] = useState("a");
  const [resp7, setText7] = useState("a");
  const [resp8, setText8] = useState("a");
  const [resp9, setText9] = useState("a");
  console.log(
    "respuesta 1",
    resp1,
    resp2,
    resp3,
    resp4,
    resp5,
    resp6,
    resp7,
    resp8,
    resp9
  );
  const perro = () => {
    var respuestas = [
      resp1,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7,
      resp8,
      resp9,
    ];
    console.log(respuestas);
  };
  return (
    <Container>
      <Image source={imagen} style={styles.image} />
      <Content>
        <Form>
          <Text>¿De que tamaño es tu hogar?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp1}
              onValueChange={(resp1) => setText1(resp1)}
            >
              <Picker.Item label="Menos de 60 metros cuadrados" value="a" />
              <Picker.Item label="Mas de 60 metros cuadrados" value="b" />
            </Picker>
          </Item>
          <Text>¿Cuantas horas estas fuera de casa ?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp2}
              onValueChange={(resp2) => setText2(resp2)}
            >
              <Picker.Item label="Menos de 5  horas" value="a" />
              <Picker.Item label="Mas de 5 horas" value="b" />
            </Picker>
          </Item>
          <Text>¿Que prefieres?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp3}
              onValueChange={(resp3) => setText3(resp3)}
            >
              <Picker.Item label="Te quedas en tu hogar tranquilo" value="a" />
              <Picker.Item
                label="Disfrutar de la compañia de tu familia o seres queridos"
                value="b"
              />
              <Picker.Item
                label="Hacer deportes y actividades al aire libre
"
                value="c"
              />
            </Picker>
          </Item>
          <Text>¿Hay niños pequeños en el hogar?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp4}
              onValueChange={(resp4) => setText4(resp4)}
            >
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b" />
            </Picker>
          </Item>
          <Text>¿cual es el motivo de que quieras un adquirir un perro?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp5}
              onValueChange={(resp5) => setText5(resp5)}
            >
              <Picker.Item label="Para que me haga compañia" value="a" />

              <Picker.Item label="Para hacer actividades" value="b" />
              <Picker.Item label="Para que me proteja" value="c" />
            </Picker>
          </Item>
          <Text>¿Como quieres que sea el caracter de tu perro?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp6}
              onValueChange={(resp6) => setText6(resp6)}
            >
              <Picker.Item label="Amigable" value="a" />
              <Picker.Item label="Amigable pero no con cualquiera" value="b" />
            </Picker>
          </Item>
          <Text>¿Tienes otro perro?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp7}
              onValueChange={(resp7) => setText7(resp7)}
            >
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b" />
            </Picker>
          </Item>
          <Text>¿Te molesta el pelo de los perros?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp8}
              onValueChange={(resp8) => setText8(resp8)}
            >
              <Picker.Item label="Si" value="a" />
              <Picker.Item label="No" value="b" />
            </Picker>
          </Item>
          <Text>¿Cada cuando lo cepillarias?</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "80%" }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={resp9}
              onValueChange={(resp9) => setText9(resp9)}
            >
              <Picker.Item label="diariamente" value="a" />
              <Picker.Item label="semanualmente" value="b" />
            </Picker>
          </Item>
        </Form>
        <Button info onPress={perro()}>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            {" "}
            Enviar{" "}
          </Text>
        </Button>
      </Content>
    </Container>
  );
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
