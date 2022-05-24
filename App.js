import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Counter from "./src/component/Counter";
``;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hey Girl, Hey 👯‍♀️!</Text>
      <Button title={"Press me Please"} color={"orange"} />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 38,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
