import React from "react";
import LogoHead from "../components/LogoHead";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-material-dropdown-v2";

export default function Register({ navigation }) {
  let data = [
    {
      value: "banana",
    },
    {
      value: "mango",
    },
  ];
  return (
    <LogoHead>
      <View>
        <Text>Create Your Account</Text>
        <TextInput placeholder="First Name" style={styles.input_fields} />
        <TextInput placeholder="Last Name" style={styles.input_fields} />
        <TextInput placeholder="Email" style={styles.input_fields} />
        <Dropdown label="Select Country" data={data} style={styles.combobox} />
        <TextInput placeholder="Email" style={styles.input_fields} />
        <TextInput placeholder="Password" style={styles.input_fields} />
        <TextInput placeholder="Confirm Password" style={styles.input_fields} />
        <Button title="CREATE ACCOUNT" />
      </View>
    </LogoHead>
  );
}

const styles = StyleSheet.create({
  input_fields: {
    borderWidth: 1,
    marginTop: 10,
    padding: 3,
    width: "100%",
  },
  combobox: {
    marginTop: 10,
    width: "100%",
    borderWidth: 1,
  },
});
