import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screen/Home";
import About from "./screen/About";
import Search from "./screen/Search";
import Settings from "./screen/Settings";

const Stack = createNativeStackNavigator();

function Routes() {
  const data = {
    title: "Home page"
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*<Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
        <Stack.Screen name="Home">{props => <Home {...props} extraData={data} />}</Stack.Screen>*/}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
