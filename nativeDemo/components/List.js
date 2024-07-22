import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./ListItem";

export default function List({ data }) {
  const renderItem = ({ item }) => <ListItem>{item}</ListItem>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
