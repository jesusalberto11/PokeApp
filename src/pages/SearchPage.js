import React from "react";
import { StyleSheet } from "react-native";

const SearchPage = ({ navigation }) => {
  return (
    <View style={styles.SearchPageContainer}>
      <Text>Hello world from SearchPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchPageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchPage;
