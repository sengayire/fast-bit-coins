import React from 'react'
import { View, Text } from 'react-native'
import commonStyles from 'src/styles'

import { styles } from './styles'

interface TypographyProps {
  text: string
}
const Typography = ({ text }: TypographyProps) => {
  return (
    <View>
      <Text style={[commonStyles.textColorPrimaryBlack70, { ...styles.text }]}>{text}</Text>
    </View>
  )
}

export default Typography
