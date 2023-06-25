import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'
import { USER_LOGIN } from 'src/queries'

import Password from 'src/components/password-component'
import { VERIFICATION_SUCCESS_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'

const PasswordScreen = () => {
  const dispatch = useDispatch()
  const [userPassword, setUserPassword] = useState<{
    password?: string
    confirmPassword?: string
  }>()
  const user = useSelector(({ user }) => user)

  const [login, { data, loading, error }] = useMutation(USER_LOGIN)

  console.log('data', data, loading, error)

  const handleContinueClicked = () => {
    login({
      variables: {
        ...user,
        password: userPassword?.password,
        passwordConfirm: userPassword?.confirmPassword
      }
    })
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
