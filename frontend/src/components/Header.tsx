import React, { FC } from 'react'
import { selectAppName } from '../features/testSlice'
import { useAppSelector } from '../app/hooks'

const Header: FC = () => {
  const appName = useAppSelector(selectAppName)
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">{appName.toLowerCase()}</a>
      </div>
    </nav>
  )
}

export default Header
