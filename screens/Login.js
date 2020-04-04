import * as React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";
import { SocialIcon } from "react-native-elements";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#B45F0450" }}>
      <View style={styles.container}>
        <View>
          <SocialIcon
            title="Sign In With Facebook"
            style={{ backgroundColor: "#0174DF90" }}
            button
            type="facebook"
          />
          <SocialIcon
            title="Sign In With Google"
            style={{ backgroundColor: "#FF400090" }}
            button
            type="google"
            onPress={() => navigation.navigate("var")}
          />
        </View>
        <View style={styles.containerRegister}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Realizar Test
            <Text
              style={{ color: "red", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Test")}
            >
              {" "}
              Aqui
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  containerSignIn: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "2%",
    borderRadius: 100
  },
  containerUserName: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 80
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 100
  },
  containerRegister: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  textInput: {
    backgroundColor: "transparent",
    flex: 5,
    color: "gray",
    paddingLeft: "25%"
  },
  boton: {
    borderRadius: 100,
    flex: 3
  }
});
