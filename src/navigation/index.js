import { NavigationContainer } from "@react-navigation/native";

import NativeStackNavigation from "./NativeStackNavigation";
import StackNavigation from "./StackNavigation";
import DrawerNavigation from "./DrawerNavigation";

function Navigation() {
  return (
    <NavigationContainer>
      {/*****************
      <NativeStackNavigation />
      <StackNavigation />
      *****************/}
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
