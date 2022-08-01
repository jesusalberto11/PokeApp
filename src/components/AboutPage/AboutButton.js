import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const AboutButton = ({ navigation }) => {
  const goToAboutPage = () => {
    navigation.navigate("AboutPage");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToAboutPage}>
        <Text style={styles.infoText}>About ⓘ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#6ddccf",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default AboutButton;
