import { Image } from 'expo-image'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import commonStyles from 'src/styles'

import { colors } from 'src/utils/colors'

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
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12,
        paddingTop: 12,
        height: 58,
        borderBottomColor: colors.primaryBlack10,
        borderBottomWidth: 1
      }}
      onPress={() => handleItemPressed(item)}
    >
      {item?.image && (
        <View
          style={{
            width: 24,
            height: 24
          }}
        >
          <Image
            source={{
              uri: item?.image
            }}
            style={{ flex: 1 }}
          />
        </View>
      )}
      <Text
        style={[
          commonStyles.textColorPrimaryBlack100,
          { fontWeight: '700', lineHeight: 30, fontSize: 18, paddingLeft: 12 }
        ]}
      >
        {item.name}
      </Text>
    </Pressable>
  )
}

export default Item
