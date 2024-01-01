import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./screens/Feed";
import Home from "./screens/Home";
import About from "./screens/About";
import Details from "./screens/Details";
import Search from "./screens/Search";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import Notifications from "./screens/Notifications";

import CreatePost from "../components/CreatePost";
import ModalCard from "../components/ModalCard";

const Stack = createStackNavigator();

function StackNavigation() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "goldenrod" }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Awesome app"
        }}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Awesome app"
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My profile"
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          gestureEnabled: true,
          transitionSpec: {
            open: config,
            close: config
          }
        }}
      />
      <Stack.Screen
        name="ModalCard"
        component={ModalCard}
        options={{
          headerShown: false,
          presentation: "transparentModal"
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Details" component={Details} initialParams={{ itemId: 25 }} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
