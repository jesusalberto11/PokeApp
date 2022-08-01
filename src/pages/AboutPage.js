import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AppStyles } from "../config/Styles";

const AboutPage = () => {
  const GithubLink = "https://github.com/jesusalberto11";

  return (
    <View style={styles.AboutPageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.mainContentContainer}>
          <Text style={styles.contentText}>Created by: Jesus Alberto</Text>
          <Text style={styles.contentText}>Colombia</Text>
          <Text style={styles.contentText}>
            Created using the following technologies:{" "}
          </Text>
        </View>
        <View style={styles.techList}>
          <Text>• React Native </Text>
          <Text>• EXPO CLI </Text>
          <Text>• Redux Toolkit </Text>
          <Text>• React Native Progress </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.canOpenURL(GithubLink).then((supported) => {
              if (supported) {
                Linking.openURL(GithubLink);
              } else {
                console.log("Can't open LINK");
              }
            });
          }}
        >
          <Text style={styles.githubText}>See more on my Github</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.version}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AboutPageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.colors.backgroundColor,
  },
  titleContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "200",
  },
  content: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContentContainer: {
    textAlign: "left",
  },
  contentText: {
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  techList: {
    padding: 20,
    textAlign: "left",
  },
  githubText: {
    fontSize: 22,
    color: "#31087B",
    textDecorationLine: "underline",
  },
  version: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  versionText: {
    fontSize: 16,
    color: "#B0B9B9",
  },
});

export default AboutPage;
