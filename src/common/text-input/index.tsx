import { Input } from '@rneui/themed'
import React from 'react'

import { colors } from 'src/utils/colors'

interface TextInputProps {
  label?: string
  placeholder: string
  type?: 'text' | 'email' | 'password'
}

const TextInput = ({ label, placeholder, type = 'text' }: TextInputProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      inputContainerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: colors.primaryBlack100 }}
      inputStyle={{ padding: 18 }}
      labelStyle={{
        color: colors.primaryBlack70,
        fontWeight: '600',
        paddingBottom: 8,
        fontSize: 16,
        lineHeight: 24
      }}
      secureTextEntry={type === 'password' && true}
    />
  )
}

export default TextInput
