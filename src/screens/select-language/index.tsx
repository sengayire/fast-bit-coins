import React from 'react'
import { View } from 'react-native'

import SelectLanguageComponent from 'src/components/select-language'

const SelectLanguage = () => {
  return (
    <View style={{ backgroundColor: '#101820', flex: 1, padding: 24 }}>
      <SelectLanguageComponent />
    </View>
  )
}

export default SelectLanguage
