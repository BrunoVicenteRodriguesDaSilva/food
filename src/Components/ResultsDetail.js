import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.Container}>
      <Image source={{ uri: result.image_url }} style={styles.Image} />
      <Text style={styles.Name}>{result.name}</Text>
      <Text style={styles.Rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <Text style={styles.Address}>{result.location.address1} </Text>
      {result.location.address2 ? (
        <Text style={styles.Address}>{result.location.address2} </Text>
      ) : null}
      {result.location.address3 ? (
        <Text style={styles.Address}>{result.location.address3} </Text>
      ) : null}
      <Text style={styles.City}>{result.location.city} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginLeft: 20,
    width: 250,
  },
  Image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  Name: {
    fontWeight: "bold",
  },
  Rating: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 4,
  },
  Address: {
    fontSize: 12,
  },
  City: {
    color: "#adadad",
    fontSize: 12,
  },
});

export default ResultsDetail;
