import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import testReducer, { TestState } from '../features/testSlice'
import Header from '../components/Header'

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
        <Header />
      </Provider>
    )
    expect(screen.getByText('conduit')).toBeInTheDocument()
  })
})
