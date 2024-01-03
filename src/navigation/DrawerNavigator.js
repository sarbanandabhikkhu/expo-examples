import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";

import DrawerContent from "../components/DrawerContent";
import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import Tipitaka from "./screens/Tipitaka";
import Dictionary from "./screens/Dictionary";
import CreatePost from "../components/CreatePost";

const Drawer = createDrawerNavigator();

export default function RouteNavigator() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerPosition: "left",
        overlayColor: "rgba(0,0,0,0.5)",
        drawerStatusBarAnimation: "slide",
        drawerType: isLargeScreen ? "permanent" : "slide",
        drawerStyle: { width: 270, flex: 1, backgroundColor: "#efefef" }
      }}
      drawerContent={props => <DrawerContent {...props} />}
    ></Drawer.Navigator>
  );
}
