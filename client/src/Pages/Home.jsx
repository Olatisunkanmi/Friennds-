import React from 'react'
import {Header, Topbar, Main , FirstRow, Arrivals, Collage, BestSelling, Blog} from '../Components/index'

const Home = () => {
  return (
    <div 
        className=''>
        <Header />
        <Topbar /> 
        <Main />
        <FirstRow />
        <Arrivals />
        <Collage />
        <BestSelling />
        <Blog />
    </div>
  )
}

export default Home