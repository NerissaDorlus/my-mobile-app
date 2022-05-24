import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  return (
    <View style={styles.CounterContainer}>
      <Text>You clicked the but 0 times.</Text>
      <Button title={"click me"} color={"gold"} />
    </View>
  );
}

const styles = StyleSheet.create({
  CounterContainer: {
    width: "80vw",
    margin: "14", //20px top and bottom and 10vw side
    padding: "14",
    backgroundColor: "beige",
  },
  counterText: {
    fontSize: 30,
    textAlign: "center",
  },
});
