import { render } from '@testing-library/react-native'
import React from 'react'

import App from '../App'

describe('App component', () => {
  it('Render app', () => {
    render(<App />)
  })
})
