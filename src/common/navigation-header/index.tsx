import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgUri } from 'react-native-svg'
import commonStyles from 'src/styles'

interface NavigationHeaderProps {
  options: NativeStackNavigationOptions
  title: string
  icon: { uri: string }
  logoIcon: { uri: string }
}
const NavigationHeader = ({ options, title, icon, logoIcon }: NavigationHeaderProps) => {
  return (
    <SafeAreaView style={options.headerStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center'
        }}
      >
        <SvgUri uri={icon?.uri ?? ''} />
        <Text style={[commonStyles.primaryBlack100, commonStyles.mdText, { fontWeight: 600 }]}>
          {title}
        </Text>
        <SvgUri uri={logoIcon?.uri ?? ''} />
      </View>
    </SafeAreaView>
  )
}

export default NavigationHeader
