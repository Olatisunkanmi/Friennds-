import React from 'react'
import '../../src/App.css'
import imageOne from '../Assests/2.jpg';
import red from '../Assests/red.jpg'

const Main = () => {
  return (
    <div 
        className='bg-black relative flex flex-row'>

                <div 
                    className='relative left-20 flex-1'>
                        <img src={imageOne} 
                        alt="first" 
                            className=''/>
                </div>

                <div 
                    className='flex flex-auto relative'>

                        <div
                            className='text-white z-40 absolute space-y-5 ml-20 mt-10
                                md:block 
                                lg:block lg:h-32 lg:w-32 lg:mt-8
                             xl:block xl:top-20  xl:w-full xl:space-y-20'>

                            <p 
                            className='him font-bold

                            md:text-3xl
                                lg:text-3xl
                                xl:text-6xl '> Let his
                            <br />
                                    <span className='text-brightRed att 
                                    lg:text-4xl
                                    xl:text-7xl xl:tracking-widest'> ATTENTION </span>
                             <br />
                                     be yours alone !  </p>

                            <button className=' p-2 bg-brightRed font-bold text-black rounded-xl
                                xl:p-5 xl:mt-3'>
                                    View Collection 
                            </button>
                        </div>

                        <div
                            className='w-3/5 bg-white absolute bottom-0 right-0 '> 
                            <img src={red} alt="" 
                            className=' '/>
                        
                        </div>
                </div>
    </div>
  )
}

export default Main