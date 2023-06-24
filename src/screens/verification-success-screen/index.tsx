import React from 'react'
import { useSelector } from 'react-redux'

import Success from 'src/components/success-component'

const VerificationSuccess = () => {
  const user = useSelector(({ user }) => user)
  console.log('user', user)
  return <Success />
}

export default VerificationSuccess
