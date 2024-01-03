import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";

import Home from "./src/navigation/screens/Home";
import Feed from "./src/navigation/screens/Feed";
import About from "./src/navigation/screens/About";
import Search from "./src/navigation/screens/Search";
import Profile from "./src/navigation/screens/Profile";
import Settings from "./src/navigation/screens/Settings";
import Tipitaka from "./src/navigation/screens/Tipitaka";
import Dictionary from "./src/navigation/screens/Dictionary";
import Library from "./src/navigation/screens/Library";
import Details from "./src/navigation/screens/Details";
import Notifications from "./src/navigation/screens/Notifications";
import CreatePost from "./src/components/CreatePost";
import ModalCard from "./src/components/ModalCard";
import AnimateBox from "./src/components/AnimateBox";

const Stack = createStackNavigator();

import RouteNavigator from "./src/navigation/RouteNavigator";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const BalooDa2Fonts = {
    "BalooDa2-Bold": require("./assets/fonts/BalooDa2-Bold.ttf"),
    "BalooDa2-Medium": require("./assets/fonts/BalooDa2-Medium.ttf"),
    "BalooDa2-Regular": require("./assets/fonts/BalooDa2-Regular.ttf")
  };

  useEffect(() => {
    async function prepare() {
      await Font.loadAsync(BalooDa2Fonts);
      await Font.loadAsync(Entypo.font);
      await new Promise(resolve => setTimeout(resolve, 300));
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const splash = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <NavigationContainer onLayout={splash}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Feed" component={RouteNavigator} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Tipitaka" component={Tipitaka} />
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ModalCard" component={ModalCard} />
        <Stack.Screen name="AnimateBox" component={AnimateBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
