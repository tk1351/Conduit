import React, { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectAppName } from '../../features/testSlice'

const Banner: FC = () => {
  const appName = useAppSelector(selectAppName)
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  )
}

export default Banner
