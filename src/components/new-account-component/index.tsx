import countriesList from 'assets/countries.json'
import statesList from 'assets/usa-states.json'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { ItemProps } from 'src/common/item'
import Modal from 'src/common/model'
import SelectInput from 'src/common/select-input'
import Typography from 'src/common/typography'

import { CountriesList } from '../countries-list'

interface NewAccountPros {
  setUserCountry: (country: { countryName: string; state: string }) => void
}
const NewAccount = ({ setUserCountry }: NewAccountPros) => {
  const { t } = useTranslation()
  const [showStates, setShowStates] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const data = !showStates ? countriesList : statesList
  const [selectedCountry, setSelectedCountry] = useState<ItemProps['item']>()
  const [selectedState, setSelectedState] = useState<ItemProps['item']>()
  const modalTitle = () => {
    if (showStates) {
      return t('account.state.modal.header')
    }
    return t('account.countries.modal.header')
  }

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
      <Typography text={t('account.countries.text')} />
      <SelectInput
        placeholder={t('account.input.label')}
        label={t('account.input.placeholder')}
        onPress={() => {
          setOpenModal(true)
          setShowStates(false)
        }}
        value={selectedCountry?.name ?? ''}
      />
      {(showStates || selectedCountry?.name === 'United States') && (
        <SelectInput
          placeholder={t('account.state.placeholder')}
          label={t('account.state.input.label')}
          onPress={() => setOpenModal(true)}
          value={selectedState?.name ?? ''}
        />
      )}
      <Modal
        title={modalTitle()}
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
