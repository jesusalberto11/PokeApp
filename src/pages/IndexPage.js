import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AppStyles } from "../config/Styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Fourd Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d70",
    title: "Five Item",
  },
  {
    id: "5869410f-3da1-471f-bd96-145571e29d72",
    title: "Six Item",
  },
  {
    id: "58694a0f-1da1-471f-bd96-145571e29d72",
    title: "Seven Item",
  },
];

const IndexPage = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Hello world from index!</Text>

      <View style={styles.list}>
        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.backgroundColor,
  },
  flatList: {
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  listItem: {
    backgroundColor: AppStyles.colors.listItemColor,
    width: 150,
    height: 150,
    marginBottom: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default IndexPage;
