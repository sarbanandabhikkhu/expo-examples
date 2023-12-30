import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function CreatePost({ navigation, route }) {
  const [post, setPost] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        editable
        multiline
        numberOfLines={100}
        maxLengt
        rows={100}
        placeholder="What's on your mind?"
        style={styles.input}
        value={post}
        onChangeText={setPost}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post },
            merge: true
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight - 400,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ececec",
    backgroundColor: "#ffffff"
  },
  input: {
    height: 250,
    padding: 10,
    color: "black",
    backgroundColor: "white",
    textAlignVertical: "top"
  },
  buttons: {
    marginTop: 100
  },
  text: {
    fontSize: 24,
    color: "goldenrod"
  }
});

// https://reactnative.dev/docs/textinput
