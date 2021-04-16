import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectAppName } from '../features/testSlice'

const App = () => {
  const appName = useAppSelector(selectAppName)
  return <div>{appName}</div>
}

export default App
