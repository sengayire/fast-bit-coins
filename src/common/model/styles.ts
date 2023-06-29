import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.primaryWhite100,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    padding: 24
  },
  headerContainer: {
    backgroundColor: colors.primaryBlack10,
    width: 82,
    height: 6,
    borderRadius: 100
  },
  headerTitle: {
    paddingTop: 29,
    color: colors.black,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26
  }
})
