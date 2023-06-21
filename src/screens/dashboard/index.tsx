import countriesList from 'assets/countries.json'
import statesList from 'assets/usa-states.json'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import commonStyles from 'src/styles'

import CommonButton from 'src/common/button'
import Modal from 'src/common/model'
import SearchInput from 'src/common/search-input'
import SelectInput from 'src/common/select-input'
import TextInput from 'src/common/text-input'
import Typography from 'src/common/typography'
import { CountriesList as CountriesListComponent } from 'src/components/countries-list'

const Dashboard = () => {
  const [showStates, setShowStates] = useState(false)
  const data = showStates ? countriesList : statesList
  return (
    <View>
      <Text style={[commonStyles.textColorPrimaryYellow100, commonStyles.mdText]}>
        My dashboard
      </Text>
      <Typography text="Ipsumsdvahldsjvkbasdbvlabsdhv asdj dS`BJ`jdsasx`kjd``dsbaljkdsbv;asdvca,/sd mz" />
      <CommonButton status="disabled" title="Continue" onPress={() => setShowStates(true)} />
      <TextInput placeholder="Enter your email" label="Email" />
      <SearchInput placeholder="Search" />
      <SelectInput placeholder="Search" />
      <Modal title="Countries" isVisible={true}>
        <CountriesListComponent data={data} />
      </Modal>
    </View>
  )
}

export default Dashboard
