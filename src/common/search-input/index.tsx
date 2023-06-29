import { Input } from '@rneui/themed'
import React from 'react'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

import { styles } from './styles'

interface SearchInputProps {
  placeholder?: string
  onTextChange?: (text: string) => void
}

const SearchInput = ({ placeholder, onTextChange }: SearchInputProps) => {
  const test = require('assets/search.svg')
  const svg = resolveAssetSource(test)

  const handleTextChange = (text) => {
    onTextChange?.(text)
  }

  return (
    <Input
      placeholder={placeholder}
      inputContainerStyle={styles.inputContainer}
      inputStyle={{ padding: 18 }}
      labelStyle={styles.inputLabel}
      leftIcon={<SvgUri uri={svg?.uri ?? ''} />}
      leftIconContainerStyle={styles.iconContainer}
      onChangeText={(text) => handleTextChange(text)}
    />
  )
}

export default SearchInput
