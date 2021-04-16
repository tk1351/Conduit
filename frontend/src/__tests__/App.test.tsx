import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('Should render text', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Hello world')).toBeInTheDocument()
    expect(screen.getByText('Learn Redux')).toBeInTheDocument()
  })
  it('Should render input element', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByRole('checkbox')).toBeTruthy()
  })
})

describe('Dispatch', () => {
  let store: EnhancedStore<{ test: TestState }>
  beforeEach(() => {
    store = configureStore({
      reducer: {
        test: testReducer,
      },
    })
  })
  it('Should dispatch toggle function', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
