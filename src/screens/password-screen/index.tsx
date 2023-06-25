import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WithNavigationContainer } from 'src/containers'
import { USER_LOGIN } from 'src/queries'

import Password from 'src/components/password-component'
import { VERIFICATION_SUCCESS_SCREEN_NAME } from 'src/constants/screens'
import { setUserInfo } from 'src/redux/slices'
// import { encrypt } from 'src/utils/encryption'
import { initialValues, validationSchema } from 'src/utils/validation'

const PasswordScreen = () => {
  const dispatch = useDispatch()
  // const [encryptedPassword, setEncryptedPassword] = useState<{
  //   password?: string
  //   confirmPassword?: string
  // }>({
  //   password: '',
  //   confirmPassword: ''
  // })

  const user = useSelector(({ user }) => user)

  const [login, { data, loading, error }] = useMutation(USER_LOGIN)

  console.log('data', login, data, loading, error)

  // encrypt(user?.password).then((hashedPassword) =>
  //   setEncryptedPassword({ password: hashedPassword })
  // )
  // encrypt(user?.confirmPassword).then((hashedPassword) =>
  //   setEncryptedPassword({ confirmPassword: hashedPassword })
  // )

  const { handleSubmit, setFieldValue, getFieldMeta } = useFormik({
    initialValues,
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
  }, [setFieldValue, user])

  // useEffect(() => {
  //   login({
  //     variables: {
  //       ...user,
  //       password: encryptedPassword.password,
  //       passwordConfirm: encryptedPassword.password
  //     }
  //   })
  // }, [encryptedPassword, user, login])

  return (
    <WithNavigationContainer
      navigateTo={VERIFICATION_SUCCESS_SCREEN_NAME}
      onNextClicked={handleSubmit}
      disabledButton={
        !getFieldMeta('password').value ||
        !getFieldMeta('confirmPassword').value ||
        !!getFieldMeta('confirmPassword').error
      }
    >
      <Password
        // setUserPassword={setUserPassword}
        setPassword={(text: string) => setFieldValue('password', text)}
        setConfirmPassword={(text: string) => setFieldValue('confirmPassword', text)}
        passwordError={getFieldMeta('password').error ?? ''}
        confirmPasswordError={getFieldMeta('confirmPassword').error ?? ''}
      />
    </WithNavigationContainer>
  )
}

export default PasswordScreen
