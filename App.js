// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search" }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          // initialParams={{ user: "me" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//     ResultsShow: ResultsShowScreen,
//   },
//   {
//     initialRouteName: "Search",
//     defaultNavigationOptions: {
//       title: "Business Search",
//     },
//   }
// );

// export default createAppContainer(navigator);
