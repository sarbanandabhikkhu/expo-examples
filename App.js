import "react-native-gesture-handler";
import { useState, useEffect, useCallback } from "react";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Routes from "./src/navigation/Routes";

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

  return <Routes onLayout={splash} />;
}
