import React from "react";
import LogoHead from "../components/LogoHead";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <LogoHead>
      <View style={styles.inputs_group}>
        <Text style={styles.login_text}>Please Login</Text>
        <TextInput placeholder="Email" style={styles.input_fields} />
        <View style={{ margin: 8 }}></View>
        <TextInput placeholder="Password" style={styles.input_fields} />
        <TouchableOpacity style={styles.forgot_password}>
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_group}>
        <View style={styles.button_login}>
          <Button title="LOGIN" />
        </View>
        <View style={styles.button_register}>
          <Button
            title="Register"
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </View>
    </LogoHead>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  logo_group: {
    marginTop: 50,
    alignItems: "center",
  },
  inputs_group: {
    padding: 40,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  buttons_group: {
    paddingStart: 50,
    paddingEnd: 50,
  },
  input_fields: {
    borderWidth: 1,
    marginTop: 10,
    padding: 3,
    width: "100%",
  },
  forgot_password: {
    alignSelf: "flex-end",
    marginTop: 5,
    fontStyle: "italic",
    marginTop: 10,
    color: "blue",
  },
  button_login: {
    marginBottom: 10,
    alignSelf: "center",
    width: "80%",
  },
  button_register: {
    width: "40%",
    marginTop: 12,
    alignSelf: "center",
  },
  login_text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
