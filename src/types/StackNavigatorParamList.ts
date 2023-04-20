import { StackNavigationProp } from '@react-navigation/stack'

export type StackNavigatorParamList = {
  Splash: undefined
  SignUp: undefined
}

export type StackScreenNavigationProps = StackNavigationProp<
  StackNavigatorParamList,
  'Splash'
>
