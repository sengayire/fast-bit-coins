import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'

import Success from 'src/components/success-component'
import { DASHBOARD_SCREEN_NAME } from 'src/constants/screens'
import { NavigationProps } from 'src/types/screens'

const VerificationSuccess = () => {
  const { navigate } = useNavigation<NavigationProps>()

  useEffect(() => {
    setTimeout(() => {
      navigate(DASHBOARD_SCREEN_NAME)
    }, 3000)
  }, [navigate])

  return <Success />
}

export default VerificationSuccess
