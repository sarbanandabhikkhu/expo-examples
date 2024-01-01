import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import About from "./screens/About";
import Details from "./screens/Details";
import Search from "./screens/Search";
import Settings from "./screens/Settings";

import CreatePost from "../components/CreatePost";

const NativeStack = createNativeStackNavigator();

function NativeStackNavigation() {
  return (
    <NativeStack.Navigator initialRouteName="Home">
      <NativeStack.Screen name="Home" component={Home} />
      <NativeStack.Screen name="About" component={About} />
      <NativeStack.Screen name="Details" component={Details} initialParams={{ itemId: 25 }} />
      <NativeStack.Screen name="Search" component={Search} />
      <NativeStack.Screen name="Settings" component={Settings} />
      <NativeStack.Screen name="CreatePost" component={CreatePost} />
    </NativeStack.Navigator>
  );
}

export default NativeStackNavigation;
