import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AboutPage = () => {
  return (
    <View style={styles.AboutPageContainer}>
      <Text>Hello world from AboutPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AboutPageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AboutPage;
