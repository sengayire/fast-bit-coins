import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primaryBlack100
  },
  inputLabel: {
    color: colors.primaryBlack70,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24
  },
  iconContainer: { width: 21, height: 21, padding: 18 }
})
