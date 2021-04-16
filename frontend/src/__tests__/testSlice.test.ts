import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import reducer, {
  TestState,
  selectAppName,
  selectArticles,
} from '../features/testSlice'

afterEach(() => cleanup())

describe('selectAppName', () => {
  let initialState: TestState = {
    appName: 'Conduit dummy',
    articles: [],
  }
  it('Should fetch appName correctly', () => {
    const action = { type: selectAppName }
    const state = reducer(initialState, action)
    expect(state.appName).toEqual(initialState.appName)
  })
})

describe('selectArticles', () => {
  let initialState: TestState = {
    appName: 'Conduit dummy',
    articles: [{ title: 'title dummy' }],
  }
  it('Should fetch articles correctly', () => {
    const action = { type: selectArticles }
    const state = reducer(initialState, action)
    expect(state.articles).toEqual(initialState.articles)
  })
})
