import { Input } from '@rneui/themed'
import React from 'react'
import { Pressable } from 'react-native'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

import { styles } from './styles'

interface SelectInputProps {
  placeholder: string
  label?: string
  onPress?: () => void
  value?: string
}

const SelectInput = ({ placeholder, label, onPress, value }: SelectInputProps) => {
  const test = require('assets/arrow-right.svg')
  const svg = resolveAssetSource(test)

  return (
    <Pressable onPressIn={onPress} style={{ width: '100%' }}>
      <Input
        onPressIn={onPress}
        placeholder={placeholder}
        inputContainerStyle={styles.inputContainer}
        label={label}
        labelStyle={styles.inputLabel}
        inputStyle={styles.shadowProp}
        rightIcon={<SvgUri uri={svg?.uri ?? ''} />}
        rightIconContainerStyle={styles.iconContainer}
        value={value}
        editable={false}
      />
    </Pressable>
  )
}

export default SelectInput
