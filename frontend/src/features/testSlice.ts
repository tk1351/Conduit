import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface TestState {
  checked: boolean
}

const initialState: TestState = {
  checked: false,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggle: (state) => {
      return { ...state, checked: !state.checked }
    },
  },
})

export const { toggle } = testSlice.actions

export const selectChecked = (state: RootState) => state.test.checked

export default testSlice.reducer
