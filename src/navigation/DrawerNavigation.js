import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import About from "./screens/About";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

import AnimateBox from "../components/AnimateBox";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#d0d0c0",
          width: 260
        },
        drawerType: isLargeScreen ? "permanent" : "slide",
        overlayColor: "rgba(0,0,0,0.3)",
        drawerPosition: "left",
        drawerStatusBarAnimation: "slide"
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="info" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="magnifying-glass" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="user" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="cog" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Animate Box"
        component={AnimateBox}
        options={{
          drawerIcon: ({ color, size }) => <Entypo name="game-controller" size={size} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;

// https://reactnavigation.org/docs/drawer-navigator/#options
