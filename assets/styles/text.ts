import { StyleSheet } from 'react-native'

import capitalize from 'src/utils/capitalize'
import { colors } from 'src/utils/colors'

type TextColors = Record<string, { color: string }>

interface ITextType extends TextColors {}

const textColors = Object.keys(colors).map((key: string) => ({
  [`textColor${capitalize(key)}`]: { color: colors[key] }
}))

let styles = {} as ITextType

;[...textColors].forEach((style) => {
  styles = { ...styles, ...style }
})

export default StyleSheet.create(styles)
