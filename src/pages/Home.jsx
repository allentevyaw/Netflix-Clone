import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row title='Latest Movies' fetchURL={requests.requestLatest}/>
        <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row title='Trending' fetchURL={requests.requestTrending}/>
    </div>
  )
}

export default Home