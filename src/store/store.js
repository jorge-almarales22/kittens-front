import { configureStore } from '@reduxjs/toolkit'
import { kittenSlice } from '../slices/kittens.slice'

export const store = configureStore({
  reducer: {
    kittens: kittenSlice.reducer
  },
})