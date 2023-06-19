import { Input } from '@rneui/themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import { colors } from 'src/utils/colors'

interface SelectInputProps {
  placeholder: string
}

const SelectInput = ({ placeholder }: SelectInputProps) => {
  const test = require('assets/arrow-right.svg')
  const svg = resolveAssetSource(test)

  return (
    <Input
      placeholder={placeholder}
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primaryBlack10
      }}
      inputStyle={[{ padding: 18 }, styles.shadowProp]}
      rightIcon={<SvgUri uri={svg.uri} />}
      rightIconContainerStyle={{ width: 21, height: 21, paddingRight: 18 }}
    />
  )
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
})

export default SelectInput
