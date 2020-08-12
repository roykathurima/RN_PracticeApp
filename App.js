import Routes from "./src/Routes";
import { View } from "react-native";
import React from "react";
import LogoHead from "./src/components/LogoHead";
export default function App() {
  return (
    <View style={{ paddingBottom: 3, flex: 1, paddingTop: 40 }}>
      <Routes />
    </View>
  );
}
