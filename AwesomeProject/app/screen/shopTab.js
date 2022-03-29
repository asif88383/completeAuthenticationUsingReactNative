import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './shop/HomeScreen';

const Drawer = createDrawerNavigator();

const shopTab = () => {
  return (
      <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor:
        'purple'}}}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{}}/>
      </Drawer.Navigator>
  )
}

export default shopTab