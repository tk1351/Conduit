import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface ArticleState {
  title: string
}

export interface TestState {
  appName: string
  articles: ArticleState[]
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
export const selectArticles = (state: RootState) => state.test.articles

export default testSlice.reducer
