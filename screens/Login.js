import { View, Text, StyleSheet, Button } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

const ANDROID_CLIENT_ID =
  "948490764552-qppb70nqjtmgu8p7urkh5scipk8v3hd4.apps.googleusercontent.com";

import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  if(user) {
    this.Perfil();
  }

  Test = () => {
    this.props.navigation.navigate("Test");
  };
  Perfil = () => {
    this.props.navigation.navigate("var");
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = (googleUser) => {
    console.log("Google Auth Response");
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          console.log("entro  al is user equal");

          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          console.log("entro  al credencials"),
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(function (result) {
                console.log("user signed in ");
                if (result.additionalUserInfo.isNewUser) {
                  firebase
                    .database()
                    .ref("/users/" + result.user.uid)
                    .set({
                      gmail: result.user.email,
                      profile_picture:
                        result.additionalUserInfo.profile.picture,
                      first_name: result.additionalUserInfo.profile.given_name,
                      last_name: result.additionalUserInfo.profile.family_name,
                      created_at: Date.now(),
                    })
                    .then(function (snapshot) {
                      // console.log('Snapshot', snapshot);
                    });
                } else {
                  firebase
                    .database()
                    .ref("/users/" + result.user.uid)
                    .update({
                      last_logged_in: Date.now(),
                    });
                }
              })
              .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.onSignIn(result);
        this.props.navigation.navigate("Loading", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
      return { error: true };
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#B45F0450" }}>
        <View style={styles.container}>
          <View>
            <SocialIcon
              title="Sign In With Facebook"
              style={{ backgroundColor: "#0174DF90" }}
              button
              type="facebook"
              onPress={this.Perfil}
            />

            <SocialIcon
              title="Sign In With Google"
              style={{ backgroundColor: "#FF400090" }}
              button
              type="google"
              onPress={this.signInWithGoogle}
            />
          </View>
          <View style={styles.containerRegister}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Realizar Test
              <Text
                style={{ color: "red", fontWeight: "bold" }}
                onPress={this.Test}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  containerSignIn: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    paddingTop: "2%",
    borderRadius: 100,
  },
  containerUserName: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 80,
  },
  containerPassword: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 100,
  },
  containerRegister: {
    height: 60,
    marginLeft: "6%",
    marginRight: "6%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "transparent",
    flex: 5,
    color: "gray",
    paddingLeft: "25%",
  },
  boton: {
    borderRadius: 100,
    flex: 3,
  },
});
