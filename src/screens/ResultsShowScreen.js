import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../API/yelp";

const ResultsShowScreen = ({ route }) => {
  const id = route.params?.id; //navigation.getParam("id");
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

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{result.name}</Text>
      <View style={styles.Info}>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.Image} source={{ uri: item }} />;
          }}
        />
        <Text style={styles.Address}>{result.location.address1}</Text>
        {result.location.address2 ? (
          <Text style={styles.Address}>{result.location.address2}</Text>
        ) : null}
        {result.location.address3 ? (
          <Text style={styles.Address}>{result.location.address3}</Text>
        ) : null}
        <Text style={styles.Phone}>{result.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
  },
  Info: {
    display: "flex",
    alignItems: "center",
  },
  Title: {
    marginLeft: 15,
    marginBottom: 25,
    fontSize: 25,
    fontWeight: "bold",
  },
  Image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
  },
  Address: {
    marginTop: 5,
    color: "#adadad",
    fontWeight: "bold",
  },
  Phone: {
    color: "#adadad",
  },
});

export default ResultsShowScreen;
