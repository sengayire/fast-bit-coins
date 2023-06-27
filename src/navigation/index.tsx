import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native'

import { colors } from 'src/utils/colors'

import StackNavigation from './stack-navigation'

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primaryWhite90
  }
}

const Navigation = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default Navigation
