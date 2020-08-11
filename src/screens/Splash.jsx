import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroid,
} from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require("./ambalogo.png")} />
      <Text style={styles.mainText}>Amba Consult</Text>
      <StatusBar style="auto" />
      <View style={{ width: "100%", marginTop: "40%" }}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          color="#907451"
          progress={1}
          style={{ width: "80%", alignSelf: "center" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
