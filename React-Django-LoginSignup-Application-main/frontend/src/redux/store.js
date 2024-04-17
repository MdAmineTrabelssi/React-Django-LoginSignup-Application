import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'

const store = configureStore({
  reducer: AuthReducer,
})

export default store