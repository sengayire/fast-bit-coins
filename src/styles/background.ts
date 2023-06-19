import { StyleSheet } from 'react-native'

import capitalize from 'src/utils/capitalize'
import { colors } from 'src/utils/colors'

type BackgroundColors = Record<string, { [key: string]: string | number }>

interface IBackgroundType extends BackgroundColors {}

const backgroundColors = Object.keys(colors).map((key: string) => ({
  [`bgColor${capitalize(key)}`]: { backgroundColor: colors[key] }
}))

backgroundColors.forEach((style) => {
  styles = { ...styles, ...style }
})

let styles = {} as IBackgroundType

export default StyleSheet.create(styles)
