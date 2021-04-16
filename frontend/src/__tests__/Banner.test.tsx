import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import testReducer, { TestState } from '../features/testSlice'
import Banner from '../components/Home/Banner'

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
        <Banner />
      </Provider>
    )
    expect(screen.getByText('conduit')).toBeInTheDocument()
    expect(
      screen.getByText('A place to share your knowledge.')
    ).toBeInTheDocument()
  })
})
