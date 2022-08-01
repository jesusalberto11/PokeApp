import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

const SkeletonList = () => {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View style={styles.SkeletonListContainer}>
      <View style={styles.SkeletonList}>
        {fakeArray.map((item, id) => {
          return (
            <View key={id} style={styles.listItem}>
              <Progress.CircleSnail size={50} indeterminate={true} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SkeletonListContainer: {
    flex: 1,
    padding: 5,
  },
  SkeletonList: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  listItem: {
    backgroundColor: "#DDDDDD",
    width: 150,
    height: 150,
    marginBottom: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default SkeletonList;
