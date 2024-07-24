import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";

export default function Movie({ navigation, route }) {
  const { title, description, available_on } = route.params;

  return (
    <View style={styles.container}>
      <Text> {`${title}`}</Text>
      <Text>{`${description}`}</Text>
      <Text>{`${available_on}`}</Text>
      <Button
        style={styles.nav}
        title="Main"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        style={styles.nav}
        title="Overview"
        onPress={() => navigation.navigate("Dashboard")}
      />
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
