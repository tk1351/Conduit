import React, { FC } from 'react'
import Banner from './Banner'
import MainView from './MainView'

const Home: FC = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
