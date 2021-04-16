import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import App from '../components/App'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import testReducer, { TestState } from '../features/testSlice'

afterEach(() => cleanup())

describe('Rendering', () => {
  let store: EnhancedStore<{ test: TestState }>
  beforeEach(() => {
    store = configureStore({
      reducer: {
        test: testReducer,
      },
    })
  })
  it('Should render appName', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Conduit')).toBeInTheDocument()
  })
})
