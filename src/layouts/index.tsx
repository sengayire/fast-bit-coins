import { makeStyles } from '@rneui/themed'
import React from 'react'
import { Text, View } from 'react-native'
import { s } from 'react-native-size-matters'

import { colors } from 'src/utils/colors'

const Container = () => {
  const styles = useStyles()
  return (
    <View style={styles.button}>
      <Text>Container</Text>
    </View>
  )
}

const useStyles = makeStyles(() => ({
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
}))

export default Container
