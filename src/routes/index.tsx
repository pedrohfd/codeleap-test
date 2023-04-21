import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Main } from '../pages/Main'
import { Splash } from '../pages/Splash'

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()

  const stackNavigatorProps = {
    initialRouteName: 'Splash',
    screenOptions: { headerShown: false },
  }

  const mainScreenProps = {
    ...TransitionPresets.ModalFadeTransition,
  }

  return (
    <NavigationContainer>
      <Navigator {...stackNavigatorProps}>
        <Screen name='Splash' component={Splash} />
        <Screen name='SignUp' component={Main} options={mainScreenProps} />
      </Navigator>
    </NavigationContainer>
  )
}
