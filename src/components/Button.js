import { StyleSheet, Button, Alert } from "react-native";

function Btn() {
  return <Button style={styles.button} title="Button" onPress={() => Alert.alert("Button clicked!")} />;
}

export default Btn;

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef"
  }
});
