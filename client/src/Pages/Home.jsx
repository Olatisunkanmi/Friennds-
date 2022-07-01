import React from 'react'
import {Header, Topbar, Main , FirstRow, Arrivals} from '../Components/index'

const Home = () => {
  return (
    <div 
        className='w-full'>
        <Header />
        <Topbar /> 
        <FirstRow />
        <Arrivals />
    </div>
  )
}

export default Home