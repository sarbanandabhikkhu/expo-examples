import { StyleSheet, Button, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";

export default function AnimateBox() {
  const width = useSharedValue(200);
  const height = useSharedValue(200);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const increaseHandler = () => {
    width.value = withSpring(width.value + 50);
    height.value = withSpring(height.value + 50);
  };
  const decreaseHandler = () => {
    width.value = withSpring(width.value - 50);
    height.value = withSpring(height.value - 25);
  };

  const translateLeft = () => {
    translateX.value -= 50;
  };
  const translateRight = () => {
    translateX.value += 50;
  };
  const translateUp = () => {
    translateY.value -= 50;
  };
  const translateDown = () => {
    translateY.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }, { translateY: withSpring(translateY.value * 2) }]
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles, { width, height }]}>
        <Entypo name="book" size={50} color="goldenrod" />
        <Text style={styles.text}>Animated Box</Text>
      </Animated.View>
      <View style={styles.buttons}>
        <Button onPress={increaseHandler} title="Increase (+)" />
        <Button onPress={decreaseHandler} title="Decrease (-)" />
      </View>
      <View style={styles.buttons}>
        <Button onPress={translateLeft} title="Left" />
        <Button onPress={translateUp} title="Up" />
        <Button onPress={translateDown} title="Down" />
        <Button onPress={translateRight} title="Right" />
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
  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef50",
    borderColor: "#efefef",
    borderRadius: 3,
    borderWidth: 1
  },
  text: {
    fontSize: 24,
    color: "goldenrod",
    fontFamily: "BalooDa2-Bold"
  },
  buttons: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});

// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation
