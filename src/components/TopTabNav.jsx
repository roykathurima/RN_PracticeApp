import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBar } from "react-native-tab-view";
import TestText from "../components/TestText";
import LogoHead from "../components/LogoHead";

const TopTabs = createMaterialTopTabNavigator();

function Profile() {
  return (
    <TestText>
      <Text>You can view your profile here</Text>
    </TestText>
  );
}

function Enrolled() {
  return (
    <TestText>
      <Text>These are your Enrolled Courses</Text>
    </TestText>
  );
}

export default function TopTabNav() {
  return (
    <LogoHead>
      <TopTabs.Navigator>
        <TopTabs.Screen name="Profile" component={Profile} />
        <TopTabs.Screen
          name="Enrolled"
          component={Enrolled}
          options={{ title: "Enrolled Courses" }}
        />
      </TopTabs.Navigator>
    </LogoHead>
  );
}
