import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestText from "../components/TestText";
import TopTabNav from "./TopTabNav";
import Courses from "../screens/Courses";
// import Ionicons from "react-native-vector-icons/Ionicons";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

// function Courses() {
//   return (
//     <TestText>
//       <Text>This is the Courses Screen</Text>
//     </TestText>
//   );
// }

function Account() {
  return (
    <TestText>
      <Text>This is the Account Screen</Text>
    </TestText>
  );
}

function Exams() {
  return (
    <TestText>
      <Text>This is the Exams Screen</Text>
    </TestText>
  );
}
export default function BottomTabNav() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Courses") {
            iconName = focused ? "book" : "book";
            return <Octicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Account") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Exams") {
            iconName = focused ? "square-edit-outline" : "square-edit-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
          // Mess around and return whatever Icon you want...
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Courses" component={Courses} />
      <Tabs.Screen name="Account" component={TopTabNav} />
      <Tabs.Screen
        name="Exams"
        component={Exams}
        options={{ tabBarBadge: 3 }}
      />
    </Tabs.Navigator>
  );
}
