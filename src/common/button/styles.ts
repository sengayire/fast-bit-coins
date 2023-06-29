import { StyleSheet } from 'react-native'
import { s } from 'react-native-size-matters'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: colors.primaryYellow100,
    height: s(52)
  },
  buttonContainer: { display: 'flex', flexDirection: 'row' },
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
