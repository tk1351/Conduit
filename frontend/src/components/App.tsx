import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggle, selectChecked } from '../features/testSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const isChecked = useAppSelector(selectChecked)
  const onClick = () => dispatch(toggle())
  return (
    <div>
      <h1>Hello world</h1>
      <div>
        Learn Redux
        <input type="checkbox" onClick={onClick} />
      </div>
      <div>{isChecked ? <h2>Done!</h2> : null}</div>
    </div>
  )
}

export default App
