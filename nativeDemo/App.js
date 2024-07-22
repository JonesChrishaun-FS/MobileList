import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import List from "./components/List";

export default function App() {
  fetch(`https://crudapi-demo-2a0735ad3b5f.herokuapp.com/api/v1/movies`)
    .then((res) => res.json())
    .then((data) => console.log({ data }));
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
