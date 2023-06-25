import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { s } from 'react-native-size-matters'

import { colors } from 'src/utils/colors'

interface ButtonProps {
  status?: 'active' | 'disabled'
  title: string
  onPress?: () => void
  disabled?: boolean
}

const CommonButton = ({ status = 'active', title, onPress, disabled }: ButtonProps) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
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

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: colors.primaryYellow100,
    height: s(52)
  },
  disabled: {
    backgroundColor: colors.primaryBlack10,
    color: colors.primaryBlack20
  },
  title: {
    color: colors.primaryBlack100,
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 32
  }
})

export default CommonButton
