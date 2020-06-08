import * as React from "react";
import {
  Container,
  View,
  Footer,
  Text,
  Button,
  Icon,
  FooterTab,
} from "native-base";
import { Card, Divider } from "react-native-elements";
import { StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { LineChart, Grid } from "react-native-svg-charts";

export default function carnet({ navigation }) {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View>
      <ScrollView>
        <Card
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
          }}
        >
          <Text>
            Nombre del perro:{/*Aqui va el nombre del perro, cainal */}
          </Text>
          <Text>Raza:{/*Aqui va la raza cainal */}</Text>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 10,
          }}
        >
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Enfermedad</DataTable.Title>
              <DataTable.Title numeric>Fecha</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={2}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </Card>

        <Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Vacuna</DataTable.Title>
              <DataTable.Title numeric>Fecha</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={2}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </Card>

        <Card
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
          }}
        >
          <LineChart
            style={{ height: 200 }}
            data={data}
            svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </Card>
        <Footer>
          <FooterTab>
            <Button onPress={() => navigation.navigate("")}>
              <Icon name="ios-paw" />
              <Text>Mis perros</Text>
            </Button>
            <Button onPress={() => navigation.navigate("")}>
              <Icon name="map" />
              <Text>Veterinarios</Text>
            </Button>
            <Button onPress={() => navigation.navigate("")} active>
              <Icon name="menu" />
              <Text>Menu</Text>
            </Button>
          </FooterTab>
        </Footer>
      </ScrollView>
    </View>
  );
}
