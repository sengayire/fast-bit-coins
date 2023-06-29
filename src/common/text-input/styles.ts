import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  input: { padding: 18 },
  inputContainer: { borderWidth: 1, borderRadius: 5, borderColor: colors.primaryBlack100 },
  inputLabel: {
    color: colors.primaryBlack70,
    fontWeight: '600',
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 24
  }
})
