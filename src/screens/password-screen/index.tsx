import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'

import Password from 'src/components/password-component'
import { VERIFICATION_SUCCESS_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'

const PasswordScreen = () => {
  const dispatch = useDispatch()
  const [userPassword, setUserPassword] = useState<{
    password?: string
    confirmPassword?: string
  }>()

  const handleContinueClicked = () => {
    dispatch(
      setUserInfo({
        password: userPassword?.password,
        confirmPassword: userPassword?.confirmPassword
      })
    )
  }
  return (
    <WithNavigationContainer
      navigateTo={VERIFICATION_SUCCESS_SCREEN_NAME}
      onNextClicked={handleContinueClicked}
    >
      <Password setUserPassword={setUserPassword} />
    </WithNavigationContainer>
  )
}

export default PasswordScreen
