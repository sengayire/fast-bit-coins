import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload
    }
  }
})

const selectUserinfo = (state) => state.user

export const makeSelectUser = createSelector(selectUserinfo, ({ user }) => user)

export const { setIsAuth } = authSlice.actions

export default authSlice.reducer
