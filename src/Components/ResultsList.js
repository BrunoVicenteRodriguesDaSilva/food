import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 5,
  },
  Container: {
    marginBottom: 10,
  },
});

export default ResultsList;
