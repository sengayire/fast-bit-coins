import { StyleSheet } from 'react-native'

import { colors } from 'src/utils/colors'

export const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: '80%',
    contentFit: 'cover',
    borderBottomLeftRadius: 200
  },
  logoutButton: {
    position: 'absolute',
    top: 80,
    right: 20,
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30
  },
  titleText: { fontSize: 30, fontWeight: '700', textAlign: 'center' },
  discoverMoreText: { textAlign: 'right', color: colors.primaryYellow100, fontSize: 15 }
})
