import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import StackNavigation from './stack-navigation'

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default Navigation
