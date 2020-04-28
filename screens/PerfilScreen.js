import React, { useState } from "react";
import { Avatar, Card, Header } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";
export default function PerfilScreen() {
  const [result, setuResult] = useState({});
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Avatar
        rounded
        size="xlarge"
        showEditButton
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />
      <Card
        title={result}
        containerStyle={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
        }}
      >
        <Text>nombre: Juanita</Text>
        <Text>Perros: 2</Text>
        <Text>Citas: 0</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
