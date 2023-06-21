import { Input } from '@rneui/themed'
import React from 'react'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import { colors } from 'src/utils/colors'

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
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primaryBlack100
      }}
      inputStyle={{ padding: 18 }}
      labelStyle={{
        color: colors.primaryBlack70,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24
      }}
      leftIcon={<SvgUri uri={svg?.uri ?? ''} />}
      leftIconContainerStyle={{ width: 21, height: 21, padding: 18 }}
      onChangeText={(text) => handleTextChange(text)}
    />
  )
}

export default SearchInput
