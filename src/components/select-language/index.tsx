import React from 'react'
import { View, Text } from 'react-native'
import { SvgUri } from 'react-native-svg'
import commonStyles from 'src/styles'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import CommonButton from 'src/common/button'
import SelectInput from 'src/common/select-input'

const SelectLanguage = () => {
  const test = require('assets/fast-coins-log-xl.svg')
  const svg = resolveAssetSource(test)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: 100,
          height: 100,
          marginBottom: 88
        }}
      >
        <SvgUri uri={svg.uri} />
      </View>
      <Text
        style={[
          commonStyles.textColorPrimaryYellow100,
          { fontWeight: 700, lineHeight: 28, fontSize: 38, paddingVertical: 52 }
        ]}
      >
        Select your Language
      </Text>
      <SelectInput placeholder="English" />
      <CommonButton title="continue" />
    </View>
  )
}

export default SelectLanguage
