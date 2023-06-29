import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primaryBlack10
  },
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 18
  },
  inputLabel: {
    color: colors.primaryBlack70,
    fontWeight: '600',
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 24
  },
  iconContainer: { width: 21, height: 21, paddingRight: 18 }
})
