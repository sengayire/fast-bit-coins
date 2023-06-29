import { Input } from '@rneui/themed'
import React from 'react'

import { styles } from './styles'

interface TextInputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  onChange?: (text: string) => void
  errorMessage?: string
}

const TextInput = ({
  label,
  placeholder,
  type = 'text',
  onChange,
  errorMessage
}: TextInputProps) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      labelStyle={styles.inputLabel}
      secureTextEntry={type === 'password' && true}
      onChangeText={onChange}
      errorMessage={errorMessage}
    />
  )
}

export default TextInput
