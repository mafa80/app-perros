import * as React from "react";
import { View, ScrollView } from "react-native";
import CardAcord from "./CardAcord";
export default function Tutoriales({ navigation }) {
  return (
    <ScrollView>
      <View>
        <CardAcord>{"Cuidados Basicos"}</CardAcord>
        <CardAcord>{"Cuidados de Salud"}</CardAcord>
        <CardAcord>{"Cuidados Alimenticios"}</CardAcord>
        <CardAcord>{"Cuidados de higiene"}</CardAcord>
        <CardAcord>{"Tutoriales"}</CardAcord>
      </View>
    </ScrollView>
  );
}
