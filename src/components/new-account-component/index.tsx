import countriesList from 'assets/countries.json'
import statesList from 'assets/usa-states.json'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { ItemProps } from '../countries-list/item'
import Modal from 'src/common/model'
import SelectInput from 'src/common/select-input'
import Typography from 'src/common/typography'

import { CountriesList } from '../countries-list'

interface NewAccountPros {
  setUserCountry: (country: { countryName: string; state: string }) => void
}
const NewAccount = ({ setUserCountry }: NewAccountPros) => {
  const [showStates, setShowStates] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const data = !showStates ? countriesList : statesList
  const [selectedCountry, setSelectedCountry] = useState<ItemProps['item']>()
  const [selectedState, setSelectedState] = useState<ItemProps['item']>()

  useEffect(() => {
    if (selectedCountry?.name === 'United States') {
      setShowStates(true)
    }
  }, [selectedCountry])

  useEffect(() => {
    setUserCountry({ countryName: selectedCountry?.name ?? '', state: selectedState?.name ?? '' })
  }, [setUserCountry, selectedCountry, selectedState])

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Typography text="  Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger tri-tip sirloin." />
      <SelectInput
        placeholder="Select country"
        label="What country do you live in?"
        onPress={() => {
          setOpenModal(true)
          setShowStates(false)
        }}
        value={selectedCountry?.name ?? ''}
      />
      {(showStates || selectedCountry?.name === 'United States') && (
        <SelectInput
          placeholder="Select country"
          label="Which state do you live in?"
          onPress={() => setOpenModal(true)}
          value={selectedState?.name ?? ''}
        />
      )}
      <Modal
        title="Countries"
        isVisible={openModal}
        onBackdropPress={() => {
          setOpenModal((openModal) => !openModal)

          if (selectedState?.name === 'United States') {
            setShowStates(true)
          }
        }}
      >
        <CountriesList
          data={data}
          setSelectedCountry={showStates ? setSelectedState : setSelectedCountry}
          onItemsSelected={() => setOpenModal((openModal) => !openModal)}
        />
      </Modal>
    </View>
  )
}

export default NewAccount
