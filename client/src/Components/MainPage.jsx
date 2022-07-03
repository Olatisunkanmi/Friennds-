import React from 'react'
import { Main , FirstRow, Arrivals, Collage, BestSelling, Blog, Service, Footer  } from '../Components/index'

const MainPage = () => {
  return (
    <div>
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

export default MainPage