import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { toggle } from '../features/testSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const [checked] = useState<boolean>(false)
  const onClick = () => dispatch(toggle(checked))
  return (
    <div>
      <h1>Hello world</h1>
      <div>
        Learn Redux
        <input type="checkbox" onClick={onClick} />
      </div>
    </div>
  )
}

export default App
