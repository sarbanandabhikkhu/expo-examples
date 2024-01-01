import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/Home";
import About from "./screens/About";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

import AnimateBox from "../components/AnimateBox";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Animate Box" component={AnimateBox} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
