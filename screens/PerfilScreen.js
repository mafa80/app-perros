import * as React from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { Input } from "react-native-elements";

export default function PerfilScreen({ navigation }) {
  return (
    <ScrollView>
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
            <Text>Nombre : Juanita</Text>
            <Text>Perros: 2</Text>
            <Text>Citas: 0</Text>
          </View>
        </Card>
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
