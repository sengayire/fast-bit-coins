import React from 'react'
import { View, Text } from 'react-native'
import commonStyles from 'src/styles'

interface TypographyProps {
  text: string
}
const Typography = ({ text }: TypographyProps) => {
  return (
    <View>
      <Text
        style={[
          commonStyles.textColorPrimaryBlack70,
          {
            paddingLeft: 48,
            paddingRight: 48,
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 18,
            fontWeight: 400
          }
        ]}
      >
        {text}
      </Text>
    </View>
  )
}

export default Typography
