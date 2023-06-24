import React from 'react'
import { View } from 'react-native'

import TextInput from 'src/common/text-input'

interface EmailComponentProps {
  setEmail: (text: string) => void
}

const EmailComponent = ({ setEmail }: EmailComponentProps) => {
  return (
    <View>
      <TextInput placeholder="Your email address" label="Email" onChange={setEmail} />
    </View>
  )
}

export default EmailComponent
