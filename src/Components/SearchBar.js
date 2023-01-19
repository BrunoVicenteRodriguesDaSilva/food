import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.BackgroundStyle}>
      <Feather name="search" style={styles.Icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.Input}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()} //{onTermSubmit} -- works, too
      />
    </View>
  );
};

const styles = StyleSheet.create({
  BackgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  Input: {
    flex: 1,
    fontSize: 18,
  },
  Icon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
