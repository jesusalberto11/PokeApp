import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import IndexPage from "./src/pages/IndexPage";
import PokemonPage from "./src/pages/PokemonPage";
import SearchPage from "./src/pages/SearchPage";
import AboutPage from "./src/pages/AboutPage";
import AboutButton from "./src/components/AboutPage/AboutButton";
import { AppStyles } from "./src/config/Styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={IndexPage}
              options={({ navigation }) => ({
                title: "Pokedex",
                headerStyle: {
                  backgroundColor: AppStyles.colors.headerColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerRight: () => <AboutButton navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="PokemonPage"
              component={PokemonPage}
              options={{
                title: "Pokemon details",
                headerStyle: {
                  backgroundColor: AppStyles.colors.headerColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="SearchPage"
              component={SearchPage}
              options={{
                title: "Search Pokemon",
                headerStyle: {
                  backgroundColor: AppStyles.colors.headerColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="AboutPage"
              component={AboutPage}
              options={{
                title: "About this app",
                headerStyle: {
                  backgroundColor: AppStyles.colors.headerColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
