import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import testReducer, { TestState } from '../features/testSlice'
import ArticleList from '../components/ArticleList'

// 記事がある場合に正しく表示される

describe('Rendering', () => {
  let store: EnhancedStore<{ test: TestState }>
  beforeEach(() => {
    store = configureStore({
      reducer: {
        test: testReducer,
      },
    })
  })
  it('Should render text if there are not articles', () => {
    render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    )
    expect(screen.getByText('No articles are here... yet.')).toBeInTheDocument()
  })
})
