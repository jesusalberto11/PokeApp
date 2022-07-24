import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import IndexPage from "./src/pages/IndexPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <IndexPage />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
