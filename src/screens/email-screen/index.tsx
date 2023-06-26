import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'

import EmailComponent from 'src/components/email-component'
import { NEW_ACCOUNT_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'
import { initialValues, validationSchema } from 'src/utils/validation'

const EmailScreen = () => {
  const dispatch = useDispatch()
  const { setFieldValue, getFieldMeta } = useFormik({
    initialValues,
    onSubmit: () => {
      // do nothing
    },
    validationSchema
  })

  const handleNextClicked = () => {
    dispatch(setUserInfo({ email: getFieldMeta('email').value }))
  }

  const handleSetEmail = (text) => {
    setFieldValue('email', text)
  }
  console.log('getFieldMetavalue', getFieldMeta('email').value)
  return (
    <WithNavigationContainer
      navigateTo={NEW_ACCOUNT_SCREEN_NAME}
      onNextClicked={handleNextClicked}
      disabledButton={!!getFieldMeta('email').error || !getFieldMeta('email').value}
    >
      <EmailComponent setEmail={handleSetEmail} errorMessage={getFieldMeta('email').error} />
    </WithNavigationContainer>
  )
}

export default EmailScreen
