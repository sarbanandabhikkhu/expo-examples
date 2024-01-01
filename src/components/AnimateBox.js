import { StyleSheet, Button, View } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";

export default function AnimateBox() {
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const translateX = useSharedValue(0);

  const increaseHandler = () => {
    width.value = withSpring(width.value + 50);
    height.value = withSpring(height.value + 50);
  };
  const decreaseHandler = () => {
    width.value = withSpring(width.value - 50);
    height.value = withSpring(height.value - 50);
  };

  const translateLeftHandler = () => {
    translateX.value -= 50;
  };
  const translateRightHandler = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }]
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles, { width, height }]} />
      <View style={styles.buttons}>
        <Button onPress={increaseHandler} title="Increase (+)" />
        <Button onPress={decreaseHandler} title="Decrease (-)" />
      </View>
      <View style={styles.buttons}>
        <Button onPress={translateLeftHandler} title="Translate L" />
        <Button onPress={translateRightHandler} title="Translate R" />
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
    backgroundColor: "violet"
  },
  buttons: {
    width: 190,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});

// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation
