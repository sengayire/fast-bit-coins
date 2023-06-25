import React from 'react'

import TextInput from 'src/common/text-input'

interface EmailComponentProps {
  setEmail: (text: string) => void
  errorMessage?: string
}

const EmailComponent = ({ setEmail, errorMessage }: EmailComponentProps) => {
  return (
    <>
      <TextInput
        placeholder="Your email address"
        label="Email"
        onChange={setEmail}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default EmailComponent
