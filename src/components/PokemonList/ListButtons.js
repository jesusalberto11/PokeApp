import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AppStyles } from "../../config/Styles";

const ListButtons = ({
  nextURL,
  previousURL,
  fetchNewPage,
  fetchPreviousPage,
  navigation,
}) => {
  const navigateToSearchPage = () => {
    navigation.navigate("SearchPage");
  };

  return (
    <View style={styles.ListButtonsContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            opacity:
              previousURL === null || previousURL === undefined ? 0.7 : 1,
            backgroundColor:
              previousURL === null || previousURL === undefined
                ? "#808080"
                : AppStyles.colors.listItemColor,
          },
        ]}
        disabled={previousURL === null || previousURL === undefined}
        onPress={fetchPreviousPage}
      >
        <Text
          style={[
            styles.text,
            {
              color:
                previousURL === null || previousURL === undefined
                  ? "#202020"
                  : "#fff",
              fontSize: 10,
            },
          ]}
        >
          ← PREVIOUS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: AppStyles.colors.listItemColor },
        ]}
        onPress={navigateToSearchPage}
      >
        <Text style={[styles.text, { color: "#fff", fontSize: 10 }]}>
          {" "}
          SEARCH 🔎︎
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            opacity: nextURL === null || nextURL === undefined ? 0.7 : 1,
            backgroundColor:
              nextURL === null || nextURL === undefined
                ? "#808080"
                : AppStyles.colors.listItemColor,
          },
        ]}
        onPress={fetchNewPage}
      >
        <Text
          style={[
            styles.text,
            {
              color:
                nextURL === null || nextURL === undefined ? "#202020" : "#fff",
              fontSize: 10,
            },
          ]}
        >
          NEXT →
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ListButtonsContainer: {
    backgroundColor: AppStyles.colors.headerColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
  },
  button: {
    alignItems: "center",

    padding: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

export default ListButtons;
