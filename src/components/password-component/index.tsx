import React from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  return (
    <View>
      <Typography text={t('password.text')} />
      <TextInput
        label={t('password.input.label')}
        placeholder={t('password.input.placeholder')}
        type="password"
        onChange={setPassword}
        errorMessage={passwordError}
      />
      <TextInput
        label={t('password.confirm.input.label')}
        placeholder={t('password.confirm.input.placeholder')}
        type="password"
        onChange={setConfirmPassword}
        errorMessage={confirmPasswordError}
      />
    </View>
  )
}

export default Password
