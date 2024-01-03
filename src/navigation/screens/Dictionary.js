import { StyleSheet, Button, Text, View } from "react-native";

export default function Dictionary({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dictionary</Text>
      <Text style={styles.description}>This is Dictionary page in Stack Navigation</Text>
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
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "goldenrod"
  }
});
