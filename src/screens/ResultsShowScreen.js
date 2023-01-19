import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../API/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result.location);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.Image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
  },
  Title: {
    marginLeft: 10,
    marginBottom: 25,
    fontSize: 25,
    fontWeight: "bold",
  },
  Image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default ResultsShowScreen;
