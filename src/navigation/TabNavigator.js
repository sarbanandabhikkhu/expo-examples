import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import CreatePost from "../components/CreatePost";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "#333333",
        headerTitleStyle: { fontFamily: "BalooDa2-Bold" },
        headerStyle: { height: 28 + 50, backgroundColor: "#efefef" },
        tabBarActiveTintColor: "goldenrod",
        tabBarInactiveTintColor: "#333333",
        tabBarStyle: { backgroundColor: "#efefef" },
        tabBarLabelStyle: { fontSize: 16, lineHeight: 22, fontFamily: "BalooDa2-Regular" },
        tabBarBadgeStyle: {
          top: -1,
          left: -3,
          lineHeight: 24,
          fontFamily: "BalooDa2-Bold",
          transform: [{ scale: 0.7 }],
          backgroundColor: "red",
          color: "white"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          name: "Home",
          tabBarIcon: ({ focused, color, size }) => <Entypo name="home" size={size - 5} color={color} />
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarBadge: "new",
          tabBarIcon: ({ focused, color, size }) => <Entypo name="news" size={size - 5} color={color} />
        }}
      />
      <Tab.Screen
        name="New"
        component={CreatePost}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) => <Entypo style={{}} name="plus" size={size + 15} color={color} />
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Search}
        options={{
          tabBarBadge: "3",
          tabBarIcon: ({ focused, color, size }) => <MaterialIcons name="chat" size={size - 5} color={color} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => <FontAwesome name="user-o" size={size - 5} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
