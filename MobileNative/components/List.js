import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import ListItem from "./ListItem";

export default function List() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    available_on: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      await fetch(
        `https://crudapi-demo-2a0735ad3b5f.herokuapp.com/movies/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setValues(data);
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem = ({ data }) => (
    <ListItem>
      {data.title}, {data.description}
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(_id) => _id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
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
