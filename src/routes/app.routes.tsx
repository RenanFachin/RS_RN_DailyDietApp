import { createNativeStackNavigator } from '@react-navigation/native-stack'
const NativeStack = createNativeStackNavigator()

import { Summary } from '@screens/Summary'
import { SummaryDetails } from '@screens/SummaryDetails'
import { Create } from '@screens/Create'
import { Success } from '@screens/Success'
import { Failed } from '@screens/Failed'
import { Details } from '@screens/Details'

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

      <NativeStack.Screen
        name='create'
        component={Create}
      />

      <NativeStack.Screen
        name='success'
        component={Success}
      />

      <NativeStack.Screen
        name='failed'
        component={Failed}
      />

      <NativeStack.Screen
        name='details'
        component={Details}
      />

    </NativeStack.Navigator>
  )
}