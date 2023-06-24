import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  country: '',
  countryState: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      return { ...state, ...payload }
    }
  }
})

const selectUserinfo = (state) => state.user

export const makeSelectUser = createSelector(selectUserinfo, ({ user }) => user)

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
