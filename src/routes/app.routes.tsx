import { createNativeStackNavigator } from '@react-navigation/native-stack'
const NativeStack = createNativeStackNavigator()

import { Summary } from '@screens/Summary'
import { SummaryDetails } from '@screens/SummaryDetails'

export function AppRoutes() {
  return (
    <NativeStack.Navigator initialRouteName='groups' screenOptions={{ headerShown: false }}>
      <NativeStack.Screen
        name='home'
        component={Summary}
      />

      <NativeStack.Screen
        name='summaryDetails'
        component={SummaryDetails}
      />
    </NativeStack.Navigator>
  )
}