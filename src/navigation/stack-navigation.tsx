import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from 'src/screens/dashboard'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}

export default StackNavigation
