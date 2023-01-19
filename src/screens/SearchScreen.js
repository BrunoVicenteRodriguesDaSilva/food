import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchAPI, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

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
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
      <ResultsList
        results={filterResultsByPrice("$$$$")}
        title="Ultimate Spender"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  DIV: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
