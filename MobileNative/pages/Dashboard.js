import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Text,
  Pressable,
} from "react-native";

export default function Dashboard({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    available_on: "",
  });

  const getMovies = async () => {
    try {
      await fetch(
        `https://crudapi-demo-2a0735ad3b5f.herokuapp.com/api/v1/movies/`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setData(data);
        });
    } catch (error) {
      error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.movies}
              onPress={() =>
                navigation.navigate("Movie", {
                  title: item.title,
                  description: item.description,
                  available_on: item.available_on,
                })
              }
            >
              <Text>{item.title}</Text>
            </Pressable>
          )}
        />
      )}

      <Button
        title="New Movie"
        onPress={() => navigation.navigate("New Movie")}
      />
      <Button title="Main" onPress={() => navigation.navigate("Home")} />

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
