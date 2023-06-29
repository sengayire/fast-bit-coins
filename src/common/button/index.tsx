import React from 'react'
import { View, Pressable, Text } from 'react-native'

import { styles } from './styles'

interface ButtonProps {
  title: string
  onPress?: () => void
  disabled?: boolean
}

const CommonButton = ({ title, onPress, disabled }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={disabled ? { ...styles.button, ...styles.disabled } : styles.button}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={disabled ? { ...styles.title, ...styles.disabled } : styles.title}>
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

export default CommonButton
