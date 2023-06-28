import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import Toast from 'react-native-root-toast'
import { useDispatch, useSelector } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'
import { USER_LOGIN } from 'src/queries'

import Password from 'src/components/password-component'
import { EMAIL_SCREEN_NAME, VERIFICATION_SUCCESS_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'
import { NavigationProps } from 'src/types/screens'
import { encrypt } from 'src/utils/encryption'
import { initialValues, validationSchema } from 'src/utils/validation'

const PasswordScreen = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<NavigationProps>()

  const user = useSelector(({ user }) => user)

  const [login, { data, loading, error, client }] = useMutation(USER_LOGIN)

  const storeUserToken = async (value) => {
    try {
      await AsyncStorage.setItem('user-token', value)
      navigate(VERIFICATION_SUCCESS_SCREEN_NAME)
    } catch (e) {
      console.log(e)
    }
  }

  if (data?.login.userToken) {
    storeUserToken(data?.login.userToken)
  }

  if (error) {
    Toast.show('something is wrong please try again', {
      onHide: async () => {
        await client.clearStore()
        navigate(EMAIL_SCREEN_NAME)
      }
    })
  }

  const { handleSubmit, setFieldValue, getFieldMeta } = useFormik({
    initialValues,
    validateOnMount: false,
    onSubmit: (values) => {
      dispatch(
        setUserInfo({
          password: values?.password,
          confirmPassword: values?.confirmPassword
        })
      )
    },
    validationSchema
  })
  useEffect(() => {
    setFieldValue('email', user.email)
    setFieldValue('isPasswordRequired', true)
  }, [setFieldValue, user])

  useEffect(() => {
    if (user.confirmPassword) {
      ;(async () => {
        const encryptedPassword = await encrypt(user?.password)
        const encryptedConfirmPassword = await encrypt(user?.confirmPassword)
        login({
          variables: {
            ...user,
            password: encryptedPassword,
            passwordConfirm: encryptedConfirmPassword
          }
        })
      })()
    }
  }, [user, login])

  return (
    <WithNavigationContainer
      onNextClicked={handleSubmit}
      disabledButton={
        loading ||
        !getFieldMeta('password').value ||
        !getFieldMeta('confirmPassword').value ||
        !!getFieldMeta('confirmPassword').error
      }
    >
      <Password
        setPassword={(text: string) => setFieldValue('password', text)}
        setConfirmPassword={(text: string) => setFieldValue('confirmPassword', text)}
        passwordError={getFieldMeta('password').error ?? ''}
        confirmPasswordError={getFieldMeta('confirmPassword').error ?? ''}
      />
    </WithNavigationContainer>
  )
}

export default PasswordScreen
