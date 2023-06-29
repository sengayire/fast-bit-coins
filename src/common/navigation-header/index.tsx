import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgUri } from 'react-native-svg'
import commonStyles from 'src/styles'

import { NavigationProps } from 'src/types/screens'

import { styles } from './styles'

interface NavigationHeaderProps {
  options: NativeStackNavigationOptions
  title: string
  icon: { uri: string }
  logoIcon: { uri: string }
  navigation: NavigationProps
}
const NavigationHeader = ({
  options,
  title,
  icon,
  logoIcon,
  navigation
}: NavigationHeaderProps) => {
  return (
    <SafeAreaView style={options.headerStyle}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <SvgUri uri={icon?.uri ?? ''} />
        </Pressable>
        <Text style={[commonStyles.primaryBlack100, commonStyles.mdText, { fontWeight: 600 }]}>
          {title}
        </Text>
        <SvgUri uri={logoIcon?.uri ?? ''} />
      </View>
    </SafeAreaView>
  )
}

export default NavigationHeader
