import { Input } from '@rneui/themed'
import React from 'react'

import { colors } from 'src/utils/colors'

interface TextInputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  onChange?: (text: string) => void
}

const TextInput = ({ label, placeholder, type = 'text', onChange }: TextInputProps) => {
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
      onChangeText={onChange}
    />
  )
}

export default TextInput
