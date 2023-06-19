import { Dimensions } from 'react-native'
import { s } from 'react-native-size-matters'

/**
 * Create screen dimensions
 */

export const dimensions = {
  sm: s(7),
  md: s(14),
  lg: s(28),
  xl: s(56),
  xxl: s(90)
}

/**
 * Get screen size
 */

export const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default {
  dimensions,
  screen
}
