import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import imagen from "../assets/images/examen.jpg";
import React, { Component } from "react";
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

export default class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item
                  label="Menos de 60 metros cuadrados"
                  value="key0"
                />
                <Picker.Item label="Mas de 60 metros cuadrados" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Menos de 5  horas" value="key0" />
                <Picker.Item label="Mas de 5 horas" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item
                  label="Te quedas en tu hogar tranquilo"
                  value="key0"
                />
                <Picker.Item
                  label="Disfrutar de la compañia de tu familia o seres queridos"
                  value="key1"
                />
                <Picker.Item
                  label="Hacer deportes y actividades al aire libre
"
                  value="key1"
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Si" value="key0" />
                <Picker.Item label="No" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Para que me haga compañia" value="key0" />

                <Picker.Item label="Para hacer actividades" value="key1" />
                <Picker.Item label="Para que me proteja" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Amigable" value="key0" />
                <Picker.Item
                  label="Amigable pero no con cualquiera"
                  value="key1"
                />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Si" value="key0" />
                <Picker.Item label="No" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Si" value="key0" />
                <Picker.Item label="No" value="key1" />
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
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="diariamente" value="key0" />
                <Picker.Item label="semanualmente" value="key1" />
              </Picker>
            </Item>
          </Form>
          <Button info>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              {" "}
              Enviar{" "}
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
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
