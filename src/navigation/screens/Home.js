import { useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Text style={styles.description}>Expo Examples by SarbaNanda Bhikkhu</Text>
      <View style={styles.buttons}>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate("Details", { itemId: 50, otherParam: "anything you want here" });
          }}
        />
        <Button title="Create post" onPress={() => navigation.navigate("CreatePost")} />
        <Text style={styles.description}>Post: {route.params?.post}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go to About" onPress={() => navigation.navigate("About")} />
        <Button title="Go to Search" onPress={() => navigation.navigate("Search")} />
        <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
        <Button title="Go to Home page again" onPress={() => navigation.push("Home")} />
        <Button title="Replaced by Feed page" onPress={() => navigation.replace("Feed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  buttons: {
    marginTop: 100
  },
  title: {
    fontSize: 48,
    color: "gold",
    fontFamily: "BalooDa2-Bold"
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "goldenrod",
    fontFamily: "BalooDa2-Medium"
  }
});
