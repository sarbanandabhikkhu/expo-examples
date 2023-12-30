import { useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation, route }) {
  // const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <Text style={styles.description}>Stack and Tab Navigation Demo</Text>

      <View style={styles.buttons}>
        <Button
          title="Go to Details"
          onPress={() => {
            /* Navigate to the Details route with params */
            navigation.navigate("Details", {
              itemId: 50,
              otherParam: "anything you want here"
            });
          }}
        />
        <Button title="Create post" onPress={() => navigation.navigate("CreatePost")} />
        <Text style={styles.description}>Post: {route.params?.post}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Go to About" onPress={() => navigation.navigate("About")} />
        <Button title="Go to Search" onPress={() => navigation.navigate("Search")} />
        <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />

        {/*<Button title="Replaced by Search page" onPress={() => navigation.replace("Search")} />*/}
        <Button title="Go to Home page again" onPress={() => navigation.push("Home")} />
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
    color: "gold"
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "goldenrod"
  }
});
