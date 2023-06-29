import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  successText: {
    color: colors.primaryBlack100,
    fontSize: 30,
    fontWeight: '700',
    paddingBottom: 24
  },
  successDescriptionText: { color: colors.primaryBlack70, fontSize: 21, lineHeight: 32 }
})
