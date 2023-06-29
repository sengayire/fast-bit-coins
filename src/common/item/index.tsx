import { Image } from 'expo-image'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import commonStyles from 'src/styles'

import { styles } from './styles'

export interface ItemProps {
  item: {
    name?: string
    image?: string
  }
  onPressItem?: (item: ItemProps['item']) => void
}

const Item = ({ item, onPressItem }: ItemProps) => {
  const handleItemPressed = (pressedItem: ItemProps['item']) => {
    onPressItem?.(pressedItem)
  }
  return (
    <Pressable style={styles.container} onPress={() => handleItemPressed(item)}>
      {item?.image && (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item?.image
            }}
            style={{ flex: 1 }}
          />
        </View>
      )}
      <Text style={[commonStyles.textColorPrimaryBlack100, { ...styles.itemText }]}>
        {item.name}
      </Text>
    </Pressable>
  )
}

export default Item
