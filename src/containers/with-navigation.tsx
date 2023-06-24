import { useNavigation } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import CommonButton from 'src/common/button'
import { NavigationProps } from 'src/types/screens'

interface WithNavigationContainerProps {
  children: ReactNode
  navigateTo?: string
  onNextClicked?: () => void
}
const WithNavigationContainer = ({
  children,
  navigateTo,
  onNextClicked
}: WithNavigationContainerProps) => {
  const { navigate } = useNavigation<NavigationProps>()
  const handleNavigation = () => {
    onNextClicked?.()
    navigate(navigateTo ?? '')
  }
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 28
      }}
    >
      {children}
      <CommonButton title="Continue" onPress={handleNavigation} />
    </View>
  )
}

export default WithNavigationContainer
