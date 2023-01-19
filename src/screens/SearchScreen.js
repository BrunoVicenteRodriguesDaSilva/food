import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchAPI, errorMsg] = useResults();

  return (
    <View style={styles.DIV}>
      <SearchBar
        onTermSubmit={() => searchAPI(term)}
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
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
