import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NativeStackNavigation from "./NativeStackNavigation";
import StackNavigation from "./StackNavigation";
import DrawerNavigation from "./DrawerNavigation";

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#d0d0c0" barStyle="light-content" />
      {/*****************
      <NativeStackNavigation />
      <StackNavigation />
      *****************/}
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
