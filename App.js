import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Expo Examples</Text>
      <Text style={styles.author}> by SarbaNanda Bhikkhu</Text>
      <Text style={styles.description}>React Native Expo CLI EAS Build Examples</Text>
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
  author: {
    marginTop: 10,
    fontSize: 24,
    color: "goldenrod",
    marginBottom: 50
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "goldenrod"
  }
});
