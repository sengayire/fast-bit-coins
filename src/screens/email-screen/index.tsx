import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'

import EmailComponent from 'src/components/email-component'
import { NEW_ACCOUNT_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'

const EmailScreen = () => {
  const [email, setEmail] = useState<string>('')
  const dispatch = useDispatch()
  const handleContinueClicked = () => {
    dispatch(setUserInfo({ email }))
  }

  return (
    <WithNavigationContainer
      navigateTo={NEW_ACCOUNT_SCREEN_NAME}
      onNextClicked={handleContinueClicked}
    >
      <EmailComponent setEmail={(text) => setEmail(text)} />
    </WithNavigationContainer>
  )
}

export default EmailScreen
