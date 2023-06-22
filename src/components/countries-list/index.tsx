import React, { useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'

import SearchInput from 'src/common/search-input'

import Item, { ItemProps } from './item'

interface CountriesListProps {
  data: { name: string; image?: string }[]
}

export const CountriesList = ({ data }: CountriesListProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<ItemProps['item']>()

  const filteredCountries = data.filter((country) => country?.name.includes(searchValue))

  console.log('selectedCountry', selectedCountry)
  return (
    <>
      <View style={{ paddingTop: 18 }}>
        <SearchInput placeholder="Search" onTextChange={(text) => setSearchValue(text)} />
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ width: '100%' }}>
        <FlatList
          data={filteredCountries}
          renderItem={({ item }) => (
            <Item item={item} onPressItem={(item) => setSelectedCountry(item)} />
          )}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </>
  )
}
