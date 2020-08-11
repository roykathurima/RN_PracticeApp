import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View, Text, StyleSheet } from "react-native";

export default function LogoHead({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo_group}>
        <Image source={require("../../ambalogo.png")} />
        <Text style={styles.mainText}>Amba Consult</Text>
        <StatusBar style="auto" />
      </View>
      {children}
    </View>
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
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
