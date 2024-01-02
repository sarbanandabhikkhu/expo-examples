import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

// import NativeStackNavigation from "./NativeStackNavigation";
// import StackNavigation from "./StackNavigation";
// import DrawerNavigation from "./DrawerNavigation";

import Home from "./screens/Home";
import About from "./screens/About";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={Home} />
      <HomeStack.Screen name="About" component={About} />
      <HomeStack.Screen name="Search" component={Search} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Appearances" component={Settings} />
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function RouteNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "goldenrod",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#d0d0c0"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Entypo name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarBadge: "new",
          tabBarIcon: ({ focused, color, size }) => <Entypo name="cog" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
