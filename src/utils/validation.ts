import * as yup from 'yup'

type InitialValuesType = {
  email: string
  password: string
  confirmPassword: string
}

export const initialValues: InitialValuesType = {
  email: '',
  password: '',
  confirmPassword: ''
}
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Please enter valid email')
    .required('Email Address is Required'),
  isPasswordRequired: yup.boolean(),
  password: yup.string().when('isPasswordRequired', {
    is: true,
    then: (schema) =>
      schema
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
        .required('Password is required')
  }),
  confirmPassword: yup.string().when('isPasswordRequired', {
    is: true,
    then: (schema) =>
      schema
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required')
  })
})
