import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.Title}>Results : {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
