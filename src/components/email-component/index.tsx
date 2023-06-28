import React from 'react'
import { useTranslation } from 'react-i18next'

import TextInput from 'src/common/text-input'

interface EmailComponentProps {
  setEmail: (text: string) => void
  errorMessage?: string
}

const EmailComponent = ({ setEmail, errorMessage }: EmailComponentProps) => {
  const { t, i18n } = useTranslation()
  console.log(' t, i18n ', t('home'), i18n)
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
