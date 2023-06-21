import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { s } from 'react-native-size-matters'

import { colors } from 'src/utils/colors'

interface ButtonProps {
  status?: 'active' | 'disabled'
  title: string
  onPress
}

const CommonButton = ({ status = 'active', title, onPress }: ButtonProps) => {
  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: colors.primaryYellow100,
    height: s(52),
    width: s(300)
  },
  title: {
    color: colors.primaryBlack100,
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 32
  }
})

export default CommonButton
