import { StyleSheet, Button, Text, View } from "react-native";

export default function Library({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.description}>Expo Examples by SarbaNanda Bhikkhu</Text>
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
