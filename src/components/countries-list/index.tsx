import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ScrollView, View } from 'react-native'

import Item, { ItemProps } from 'src/common/item'
import SearchInput from 'src/common/search-input'

interface CountriesListProps {
  data: { name: string; image?: string }[]
  setSelectedCountry?: (item: ItemProps['item']) => void
  onItemsSelected?: () => void
}

export const CountriesList = ({
  data,
  setSelectedCountry,
  onItemsSelected
}: CountriesListProps) => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState('')

  const filteredCountries = data.filter((country) => country?.name.includes(searchValue))

  const handleItemSelected = (item) => {
    setSelectedCountry?.(item)
    onItemsSelected?.()
  }

  return (
    <>
      <View style={{ paddingTop: 18 }}>
        <SearchInput
          placeholder={t('account.countries.modal.search')}
          onTextChange={(text) => setSearchValue(text)}
        />
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ width: '100%' }}>
        <FlatList
          data={filteredCountries}
          renderItem={({ item }) => <Item item={item} onPressItem={handleItemSelected} />}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </>
  )
}
