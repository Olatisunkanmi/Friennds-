import React from 'react'
import img from '../Assests/blog.jpg';

const Blog = () => {
  return (
    <div>
                <div 
                className='text-center'>
                    <h3  className='text-3xl text-brightRed font-bold font-serif'>Our Blog  </h3>
                                <p>Just In </p>    
              </div>



                <div 
                    className='mt-10'>
                        
                                        <ul 
                                            className='mt-5 flex flex-col  md:flex-row justify-center h-1/2 p-5
                                            mx-20 md:space-x-6'>
                                                       
                                                        <li 
                                                            className='cursor-pointer  mt-3 md:w-1/3 border-2'>
                                                                            <img src={img} alt=""
                                                                            className='' />

                                                                    <div
                                                                     className='p-7'>
                                                                    <p> 25 </p>
                                                                    <p> May  </p>
                                                                    <p>  Top 10 colors for the best lipstick </p>

                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                                    </div>
                                                        </li>

                                                        <li 
                                                            className='cursor-pointer mt-3 md:w-1/3 border-2'>
                                                                            <img src={img} alt=""
                                                                            className='' />

                                                                    <div
                                                                     className='p-7'>
                                                                    <p> 25 </p>
                                                                    <p> May  </p>
                                                                    <p>  Top 10 colors for the best lipstick </p>

                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                                                    </div>
                                                        </li>

                                                
                                                      

                                          </ul>

                            <div 
                                className='
                                    text-center'>
                                    <button
                                        className=' p-3'>
                                             PREV
                                    </button>

                                    <button 
                                        className='p-3'>
                                          NEXT
                                    </button>
                            </div>

                  </div>

    </div>
  )
}

export default Blog