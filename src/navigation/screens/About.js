import { StyleSheet, Button, Text, View } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About page</Text>
      <Text style={styles.description}>This is About page in Navigation</Text>

      <View style={styles.buttons}>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go to Search" onPress={() => navigation.navigate("Search")} />
        <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />

        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go to About page again" onPress={() => navigation.push("About")} />
        <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
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
    marginTop: 200
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
