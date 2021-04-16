import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import testReducer, { TestState } from '../features/testSlice'
import Home from '../components/Home/Home'

describe('Rendering', () => {
  let store: EnhancedStore<{ test: TestState }>
  beforeEach(() => {
    store = configureStore({
      reducer: {
        test: testReducer,
      },
    })
  })
  it('Should render text', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    expect(screen.getByText('Popular Tags')).toBeInTheDocument()
  })
})
