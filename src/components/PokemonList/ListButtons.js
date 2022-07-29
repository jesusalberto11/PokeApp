import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { AppStyles } from "../../config/Styles";

const ListButtons = ({
  nextURL,
  previousURL,
  fetchNewPage,
  fetchPreviousPage,
}) => {
  return (
    <View style={styles.ListButtonsContainer}>
      <Button
        onPress={fetchPreviousPage}
        title="Previous"
        color={AppStyles.colors.listItemColor}
        accessibilityLabel="Fetch previous page"
        disabled={previousURL === null || previousURL === undefined}
      />
      <Button
        onPress={fetchNewPage}
        title="Next"
        color={AppStyles.colors.listItemColor}
        accessibilityLabel="Fetch next page"
        disabled={nextURL === null || nextURL === undefined}
      />
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
});

export default ListButtons;
