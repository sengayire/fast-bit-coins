import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12,
    height: 58,
    borderBottomColor: colors.primaryBlack10,
    borderBottomWidth: 1
  },
  imageContainer: {
    width: 24,
    height: 24
  },
  itemText: { fontWeight: '700', lineHeight: 30, fontSize: 18, paddingLeft: 12 }
})
