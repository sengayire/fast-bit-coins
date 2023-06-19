import { StyleSheet } from 'react-native'

import capitalize from 'src/utils/capitalize'
import { colors } from 'src/utils/colors'
import { dimensions } from 'src/utils/dimensions'

type TextColors = Record<string, { [key: string]: string | number }>

interface IFontSize {
  xsText: { fontSize: number }
  smText: { fontSize: number }
  mdText: { fontSize: number }
  lgText: { fontSize: number }
  xlText: { fontSize: number }
  xxlText: { fontSize: number }
}

interface ITextType extends TextColors, IFontSize {}

const textColors = Object.keys(colors).map((key: string) => ({
  [`text${capitalize(key)}`]: { color: colors[key] }
}))

const fontSizes = Object.keys(dimensions).map((key: string) => ({
  [`${key}Text`]: { fontSize: dimensions[key] * 1.5 }
}))

let styles = {} as ITextType

;[...textColors, ...fontSizes].forEach((style) => {
  styles = { ...styles, ...style }
})

export default StyleSheet.create(styles)
