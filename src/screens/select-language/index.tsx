import React from 'react'
import { StyleSheet, View } from 'react-native'

import SelectLanguageComponent from 'src/components/select-language'

const SelectLanguage = () => {
  return (
    <View style={styles.container}>
      <SelectLanguageComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#101820', flex: 1, padding: 24 }
})

export default SelectLanguage
