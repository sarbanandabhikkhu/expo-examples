import { NavigationContainer } from "@react-navigation/native";

import NativeStackNavigation from "./NativeStackNavigation";
import StackNavigation from "./StackNavigation";

function Navigation() {
  return (
    <NavigationContainer>
      {/*****************
      <NativeStackNavigation />
      *****************/}
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
