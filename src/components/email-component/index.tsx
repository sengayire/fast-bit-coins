import React from 'react'
import { useTranslation } from 'react-i18next'

import TextInput from 'src/common/text-input'

interface EmailComponentProps {
  setEmail: (text: string) => void
  errorMessage?: string
}

const EmailComponent = ({ setEmail, errorMessage }: EmailComponentProps) => {
  const { t } = useTranslation()
  return (
    <>
      <TextInput
        placeholder={t('email.placeholder')}
        label={t('email.label')}
        onChange={setEmail}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default EmailComponent
