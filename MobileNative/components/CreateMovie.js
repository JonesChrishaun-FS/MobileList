import { TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function CreateMovie({ navigation, route }) {
  const [postText, setPostText] = useState({
    title: "",
    description: "",
    available_on: "",
  });

  const createMovie = async () => {
    try {
      await fetch(
        `https://crudapi-demo-2a0735ad3b5f.herokuapp.com/api/v1/movies/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postText),
        }
      );
    } catch (error) {
      error.message;
    }
  };

  return (
    <>
      <TextInput
        multiline
        placeholder="title"
        style={{ height: 50, padding: 10, backgroundColor: "white" }}
        value={postText.title}
        onChangeText={createMovie}
      />
      <TextInput
        multiline
        placeholder="description"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText.description}
        onChangeText={createMovie}
      />
      <TextInput
        multiline
        placeholder="available_on"
        style={{ height: 50, padding: 10, backgroundColor: "white" }}
        value={postText.available_on}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Dashboard",
            params: {},
            merge: true,
          });
        }}
      />
    </>
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
