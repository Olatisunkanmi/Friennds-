import React from 'react'
import {Header, Topbar, Main , FirstRow, Arrivals, Collage, BestSelling, Blog, Service, Footer  } from '../Components/index'

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
        <Service />
        <Footer />
    </div>
  )
}

export default Home