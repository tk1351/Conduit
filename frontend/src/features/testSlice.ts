import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface TestState {
  appName: string
  articles: string[]
}

const initialState: TestState = {
  appName: 'Conduit',
  articles: [],
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
})

export const selectAppName = (state: RootState) => state.test.appName

export default testSlice.reducer
