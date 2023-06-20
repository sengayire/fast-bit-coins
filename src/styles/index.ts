import { StyleSheet } from 'react-native'

import background from './background'
import text from './text'

const commonStyles = StyleSheet.create({
  ...text,
  ...background
})

export default commonStyles
