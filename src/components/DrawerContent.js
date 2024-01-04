import { StyleSheet, TouchableOpacity, Linking, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useDrawerProgress } from "@react-navigation/drawer";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
// Usage: <MaterialIcons name="help" size={32} color="black" />

import Home from "../navigation/screens/Home";
import About from "../navigation/screens/About";
import Search from "../navigation/screens/Search";
import Profile from "../navigation/screens/Profile";
import Settings from "../navigation/screens/Settings";
import Tipitaka from "../navigation/screens/Tipitaka";
import Dictionary from "../navigation/screens/Dictionary";
import AnimateBox from "./AnimateBox";

function scaleHeight({ source, desiredWidth }) {
  const { width, height } = Image.resolveAssetSource(source);
  return (desiredWidth / width) * height;
}

function LocalImage({ imageWidth }) {
  const localSource = "../../assets/icon.png";
  const imageHeight = scaleHeight({
    source: require(localSource),
    desiredWidth: imageWidth
  });

  return (
    <Image
      source={require(localSource)}
      style={{
        borderWidth: 1,
        width: imageWidth,
        height: imageHeight,
        backgroundColor: "transparent"
      }}
    />
  );
}

const CustomDrawerItem = ({ label, screen, navigation }) => {
  return (
    <DrawerItem
      label={() => (
        <TouchableOpacity onPress={() => navigation.navigate(screen)}>
          <Text>{label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default function DrawerContent(props) {
  const navigation = useNavigation();

  // console.log(props.navigation);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <LocalImage imageWidth={60} />
        <Text style={styles.headerText}>DhammaChakka</Text>
      </View>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem
        label="Search"
        labelStyle={styles.item}
        onPress={() => navigation.navigate("Search")}
        icon={({ color, size }) => <Ionicons name="search" size={size} color={color} />}
      />
      <DrawerItem
        label="Tipitaka"
        labelStyle={styles.item}
        onPress={() => navigation.navigate("Tipitaka")}
        icon={({ color, size }) => <Ionicons name="book" size={size} color={color} />}
      />
      <DrawerItem
        label="Dictionary"
        labelStyle={styles.item}
        onPress={() => navigation.navigate("Dictionary")}
        icon={({ color, size }) => <FontAwesome name="book" size={size} color={color} />}
      />
      <DrawerItem
        label="Library"
        labelStyle={styles.item}
        onPress={() => navigation.navigate("Library")}
        icon={({ color, size }) => <Ionicons name="library" size={size} color={color} />}
      />
      <DrawerItem
        label="Animate"
        labelStyle={styles.item}
        onPress={() => navigation.navigate("AnimateBox")}
        icon={({ color, size }) => <FontAwesome name="gamepad" size={size} color={color} />}
      />
      <DrawerItem
        label="About"
        onPress={() => navigation.navigate("About")}
        labelStyle={styles.item}
        icon={({ color, size }) => <MaterialIcons name="info-outline" size={size} color={color} />}
      />
      <DrawerItem
        label="Help"
        labelStyle={[styles.item]}
        onPress={() => Linking.openURL("htFontAwesometps://sarbanandabhikkhu.github.io/tipitaka-xml")}
        icon={({ color, size }) => <MaterialIcons name="help-outline" size={size} color={color} />}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    marginTop: -33,
    paddingTop: 25,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 0,
    paddingHorizontal: 10,
    backgroundColor: "#d0d0c0"
  },
  headerText: {
    fontSize: 24,
    fontFamily: "BalooDa2-Medium"
  },
  item: {
    fontSize: 20,
    fontFamily: "BalooDa2-Medium"
  }
});
