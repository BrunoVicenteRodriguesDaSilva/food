import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../API/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "sao paulo",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.DIV}>
      <SearchBar
        onTermSubmit={searchAPI}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  DIV: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
