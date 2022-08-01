import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SekeletonList = () => {
  return (
    <View style={styles.SekeletonListContainer}>
      <Text>Hello world from SekeletonList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SekeletonListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SekeletonList;
