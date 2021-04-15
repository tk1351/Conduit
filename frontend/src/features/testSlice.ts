import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TestState {
  checked: boolean
}

const initialState: TestState = {
  checked: false,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      return { ...state, checked: !state.checked }
    },
  },
})

export const { toggle } = testSlice.actions

export default testSlice.reducer
