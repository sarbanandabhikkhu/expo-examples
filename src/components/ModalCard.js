import { Animated, View, Text, Pressable, Button, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";

export default function ModalCard({ navigation }) {
  const { colors } = useTheme();
  const { current } = useCardAnimation();

  return (
    <View style={styles.container}>
      <Pressable
        style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={[
          styles.animated,
          {
            backgroundColor: colors.card,
            transform: [
              {
                scale: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                  extrapolate: "clamp"
                })
              }
            ]
          }
        ]}
      >
        <Text style={styles.text}>
          Mise en place is a French term that literally means “put in place.” It also refers to a way cooks in
          professional kitchens and restaurants set up their work stations—first by gathering all ingredients for a
          recipes, partially preparing them (like measuring out and chopping), and setting them all near each other.
          Setting up mise en place before cooking is another top tip for home cooks, as it seriously helps with
          organization. It’ll pretty much guarantee you never forget to add an ingredient and save you time from running
          back and forth from the pantry ten times.
        </Text>
        <Button title="Okay" color={colors.primary} style={styles.button} onPress={navigation.goBack} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  animated: {
    padding: 16,
    width: "90%",
    maxWidth: 400,
    borderRadius: 3
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    color: "goldenrod"
  },
  button: {
    marginTop: 10,
    alignSelf: "flex-end"
  }
});
