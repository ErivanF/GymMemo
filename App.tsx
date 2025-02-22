import { NavigationContainer } from "@react-navigation/native";
import ExerciseList from "./Views/ExerciseList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Providers from "./Providers";
import SetList from "./Views/SetList";
import ExercisePage from "./Views/Exercise";
import { ParamList } from "./Interfaces";

export default function App() {
  const Stack = createNativeStackNavigator<ParamList>();
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Sets"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Sets" component={SetList} />
          <Stack.Screen name="Exercises" component={ExerciseList} />
          <Stack.Screen name="Exercise" component={ExercisePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
