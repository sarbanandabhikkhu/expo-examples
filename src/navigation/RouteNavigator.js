import { TouchableOpacity, View, Text, Button, useWindowDimensions } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

// import NativeStackNavigation from "./NativeStackNavigation";
// import StackNavigation from "./StackNavigation";
// import DrawerNavigation from "./DrawerNavigation";
// import BottomTabNavigation from "./BottomTabNavigation";

import TabNavigator from "./TabNavigator";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const HeaderNavIcons = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 10, flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Notifications")}>
        <Entypo name="bell" size={24} color="#333333" />
        <Text
          style={{
            position: "absolute",
            top: 5,
            left: 20,
            lineHeight: 16,
            minWidth: 12,
            maxHeight: 12,
            paddingHorizontal: 4,
            borderRadius: 50,
            fontSize: 10,
            fontFamily: "BalooDa2-Bold",
            backgroundColor: "red",
            color: "white"
          }}
        >
          9+
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search" size={24} color="#333333" />
      </TouchableOpacity>
      {/*<Button onPress={() => navigation.navigate("Login")} title="Login" color="#333333" />*/}
    </View>
  );
};

export default function RouteNavigator() {
  const { dispatch } = useNavigation();
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
    >
      <Drawer.Screen
        name="DhammaChakka"
        component={TabNavigator}
        options={{
          name: "Home",
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={28}
              color="#333333"
              style={{ marginLeft: 10 }}
              onPress={() => dispatch(DrawerActions.toggleDrawer())}
            />
          ),
          headerRight: () => <HeaderNavIcons />
        }}
      />
    </Drawer.Navigator>
  );
}
