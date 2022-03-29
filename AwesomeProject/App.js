import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginScreen from "./app/screen/auth/UserLoginScreen";
import shopTab from "./app/screen/shopTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ShopTab" component={shopTab} options={{headerShown:false}}/>
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
