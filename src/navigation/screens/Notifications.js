import { StyleSheet, Button, Text, View } from "react-native";

export default function Notifications({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.description}>This is Notifications page in Stack Navigation</Text>
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