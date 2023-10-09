import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from '../redux-reducers/fetchReducer'

export const store = configureStore({
  reducer: {
    fetch: fetchReducer
  },
})

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof fetch>;
export default store;