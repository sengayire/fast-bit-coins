import { useNavigation } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import CommonButton from 'src/common/button'
import { NavigationProps } from 'src/types/screens'

interface WithNavigationContainerProps {
  children: ReactNode
  navigateTo?: string
  onNextClicked?: () => void
  disabledButton?: boolean
}
const WithNavigationContainer = ({
  children,
  navigateTo,
  onNextClicked,
  disabledButton
}: WithNavigationContainerProps) => {
  const { navigate } = useNavigation<NavigationProps>()
  const { t } = useTranslation()
  const handleNavigation = () => {
    onNextClicked?.()
    if (navigateTo) {
      navigate(navigateTo ?? '')
    }
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
      <CommonButton
        title={t('language.select.continue.btn')}
        onPress={handleNavigation}
        disabled={disabledButton}
      />
    </View>
  )
}

export default WithNavigationContainer
