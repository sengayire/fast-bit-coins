import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  country: '',
  state: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      return { ...state, ...payload }
    },
    clearUserInfo: (state) => {
      state.email = ''
      state.state = ''
      state.country = ''
      state.password = ''
      state.confirmPassword = ''
    }
  }
})

const selectUserinfo = (state) => state.user

export const makeSelectUser = createSelector(selectUserinfo, ({ user }) => user)

export const { setUserInfo, clearUserInfo } = userSlice.actions

export default userSlice.reducer
