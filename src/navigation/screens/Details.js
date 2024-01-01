import { StyleSheet, Button, Text, View } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  /* Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details page</Text>
      <View style={styles.details}>
        <Text style={styles.text}>itemId: {JSON.stringify(itemId)}</Text>
        <Text style={styles.text}>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Go to Details page again"
          onPress={() =>
            navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
  title: {
    fontSize: 48,
    color: "gold"
  },
  details: {
    padding: 10,
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ececec"
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
    color: "goldenrod"
  },
  buttons: {
    marginTop: 100
  }
});
