import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TestText from "./components/TestText";
import { Button, Text } from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
const Stack = createStackNavigator();

// function Register() {
//   return (
//     <TestText>
//       <Text>This is the Register Screen</Text>
//     </TestText>
//   );
// }

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
