import React, { useState } from "react";
import LogoHead from "../components/LogoHead";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
// import { Dropdown } from "react-native-material-dropdown-v2";
import { Picker } from "@react-native-community/picker";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function Register({ navigation }) {
  const [currentState, setCurrentState] = useState("java");
  var _isLoaded = false;
  // let data = [
  //   {
  //     value: "UK",
  //   },
  //   {
  //     ke: "Kenya",
  //   },
  //   {
  //     ru: "Russia",
  //   },
  //   {
  //     ug: "Uganda",
  //   },
  // ];

  return (
    <LogoHead>
      <View style={styles.container}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Create Your Account
        </Text>
        <TextInput placeholder="First Name" style={styles.input_fields} />
        <TextInput placeholder="Last Name" style={styles.input_fields} />
        <TextInput placeholder="Email" style={styles.input_fields} />
        <View style={styles.combobox}>
          <Picker
            mode={"dropdown"}
            selectedValue={currentState}
            onValueChange={(itemValue, itemIndex) =>
              setCurrentState({ itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        {/* <Dropdown
          label="Select Country"
          useNativeDriver={true}
          data={data}
          style={styles.combobox}
        /> */}
        <TextInput placeholder="Email" style={styles.input_fields} />
        <TextInput placeholder="Password" style={styles.input_fields} />
        <TextInput placeholder="Confirm Password" style={styles.input_fields} />
        <View style={styles.account_btn}>
          <Button title="CREATE ACCOUNT" />
        </View>
      </View>
    </LogoHead>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input_fields: {
    borderWidth: 1,
    marginTop: 10,
    padding: 3,
    width: "100%",
  },
  combobox: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
  },
  account_btn: {
    alignSelf: "center",
    width: "50%",
    marginTop: 10,
  },
});
