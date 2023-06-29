import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'

import NewAccount from 'src/components/new-account-component'
import { PASSWORD_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/user-slice'

const NewAccountScreen = () => {
  const dispatch = useDispatch()

  const [{ countryName, state }, setUserCountry] = useState<{ countryName: string; state: string }>(
    {
      countryName: '',
      state: ''
    }
  )

  const handleContinueClicked = () => {
    dispatch(setUserInfo({ country: countryName, state }))
  }

  return (
    <WithNavigationContainer
      navigateTo={PASSWORD_SCREEN_NAME}
      onNextClicked={handleContinueClicked}
      disabledButton={countryName !== 'United States' ? countryName === '' : state === ''}
    >
      <NewAccount setUserCountry={setUserCountry} />
    </WithNavigationContainer>
  )
}

export default NewAccountScreen
