import React from 'react'
import { View } from 'react-native'

import TextInput from 'src/common/text-input'
import Typography from 'src/common/typography'

interface PasswordProps {
  setPassword: (text: string) => void
  setConfirmPassword: (text: string) => void
  passwordError: string
  confirmPasswordError: string
}
const Password = ({
  setPassword,
  setConfirmPassword,
  passwordError,
  confirmPasswordError
}: PasswordProps) => {
  return (
    <View>
      <Typography text="Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger tri-tip sirloin." />
      <TextInput
        label="Please, add your password"
        placeholder="Enter Password"
        type="password"
        onChange={setPassword}
        errorMessage={passwordError}
      />
      <TextInput
        label="Please, confirm your password"
        placeholder="Confirm Password"
        type="password"
        onChange={setConfirmPassword}
        errorMessage={confirmPasswordError}
      />
    </View>
  )
}

export default Password
