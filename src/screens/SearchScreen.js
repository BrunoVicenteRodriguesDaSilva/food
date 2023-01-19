import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = ({ navigation }) => {
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
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Ultimate Spender"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  DIV: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
