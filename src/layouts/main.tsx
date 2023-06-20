import React, { ReactNode } from 'react'
import { View } from 'react-native'
import commonStyles from 'src/styles'

interface MainContainerProps {
  children: ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <View style={[commonStyles.bgPrimaryWite90]}>{children}</View>
}

export default MainContainer
