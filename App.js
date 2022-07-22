import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import IndexPage from "./src/pages/IndexPage";

export default function App() {
  return (
    <View style={styles.container}>
      <IndexPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
