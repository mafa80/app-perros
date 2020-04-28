import * as React from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { Input } from "react-native-elements";

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
        <View style={{ alignItems: "center" }}>
          <Avatar rounded size="xlarge" showEditButton />
        </View>
        <Card
          title="Nuevo perro"
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRadius: 0,
          }}
        >
          <Input
            placeholder="Nombre"
            onChangeText={(vnom) => setText(vnom)}
            defaultValue={vnom}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />

          <Input
            placeholder="Raza"
            onChangeText={(vraza) => setText(vraza)}
            defaultValue={vraza}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />
          <Input
            placeholder="Edad"
            onChangeText={(vedad) => setText(vedad)}
            defaultValue={vedad}
            leftIcon={<Icon name="pets" size={15} color="black" />}
          />
          <Button
            containerStyle={{
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            title="Guardar"
            type="outline"
            icon={<Icon name="done" />}
            iconRight
            buttonStyle={styles.buttonAdd}
          />
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
