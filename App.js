import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Voice from "@react-native-voice/voice";
import * as Speech from "expo-speech";

export default function App() {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("en-US");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = result => {
    setResults(result.value);
  };

  const onSpeechError = error => {
    console.log(error);
  };

  const startSpeak = () => {
    const text = "Hello, SarbaNanda! How are you?";
    Speech.speak(text);
  };
  const stopSpeak = () => {
    Speech.stop();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {!started ? <Button title="Start Speech" onPress={startSpeechToText} /> : undefined}
      {started ? <Button title="Stop Speech" onPress={stopSpeechToText} /> : undefined}
      <View style={styles.box}>
        {results.map((result, index) => (
          <Text style={styles.text} key={index}>
            {result}
          </Text>
        ))}
      </View>
      <Button title="Start Speak" onPress={startSpeak} />
      <Button title="Stop Speak" onPress={stopSpeak} />
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
  box: {
    paddingVertical: 50
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: "goldenrod"
  }
});
