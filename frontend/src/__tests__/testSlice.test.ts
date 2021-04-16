import reducer, { toggle, TestState } from '../features/testSlice'

describe('toggle action', () => {
  let initialState: TestState = {
    checked: false,
  }
  it('Click to be true', () => {
    const action = { type: toggle.type }
    const state = reducer(initialState, action)
    expect(state.checked).toBeTruthy()
  })
})
