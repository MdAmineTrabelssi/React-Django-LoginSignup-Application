import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin} = AuthSlice.actions

export default AuthSlice.reducer