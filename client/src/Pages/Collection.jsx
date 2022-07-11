import { ArrowDropDownCircleOutlined, GridOnOutlined, ViewColumn } from '@material-ui/icons'
import React from 'react'
import '../App.css'

const Collection = () => {
  return (
    <div>
    
            <div
                className='text-center p-10 bg-stone-300 '> 
                        <h3 
                          className='text-xl tracking-wider font-bold '>  Body Cleaner  </h3>

                        <div 
                          className='flex flex-row justify-center mt-1 font-light '>
                        <p 
                        className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Home </p>
                        <p 
                        className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> <span> / </span> Body Cleaner  </p>
                          </div>
            </div>


            <div 
              className='p-5 justify-center px-20 flex flex-row'>




                <div
                className='hidden md:block w-1/8 space-y-3 border-white border-2'>

                                 {/** Side Bar for collection  */}


                      <div
                        className=' md:block space-y-2 '>

                            <h2 
                              className='text-xl text-amber-600 font-serif font-bold'>Category </h2>

                            <p 
                            className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Cosmetics </p>
                            <p 
                            className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Lipstick </p>
                            <p 
                            className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Lipgloss</p>
                            <p 
                            className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Foundation Creams</p>
                      </div>


                      <div
                      className=' md:block space-y-2'>

                          <h2 
                            className='text-xl text-amber-600 font-serif font-bold'>Shop by Colour  </h2>

                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Clinique </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Revlon </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Galmo </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Cinderalla </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> Mystique</p>
                    </div>


                      <div
                      className=' md:block space-y-2'>

                          <h2 
                            className='text-xl text-amber-600 font-serif font-bold'>Shop by Price   </h2>

                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>$100 - $200 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $200 - $300 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>$300 - $500 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $500 - $700 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $700 - $1000</p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $1000 ++ </p>
                    </div>


                    <div
                      className=' md:block space-y-2'>

                          <h2 
                            className='text-xl text-amber-600 font-serif font-bold'>Shop by Price   </h2>

                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>$100 - $200 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $200 - $300 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>$300 - $500 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $500 - $700 </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $700 - $1000</p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'> $1000 ++ </p>
                    </div>



                    <div
                      className=' md:block space-y-2  '>

                          <h2 
                            className='text-xl text-amber-600 font-serif font-bold'>Shop by Flavour    </h2>

                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Lotus </p>
                          <p 
                          className='hover:text-orange-500 text-sm cursor-pointer font-semibold font-mono'>Peach </p>
                         
                    </div>


                </div>

                    {   /**  Main PAge  collection  */   }

                            <div className='w-4/5'>

                                  <div 
                                    className='flex flex-row justify-between items-center'>
                                          <div>
                                          <GridOnOutlined className='icons'/>
                                          <ViewColumn  className='icons'/>
                                          </div>

                                          <div 
                                            className='flex flex-row items-center font-bold'>
                                              <p 
                                                className='mr-5'> Sort By </p>

                                              <button className='mr-5 p-2 
                                              border-white
                                              border-2
                                              border-b-amber-600
                                              hover:bg-black
                                              hover:text-white'> <span className='pr-10'> Featured</span> 
                                                <ArrowDropDownCircleOutlined/>
                                              </button>
                                          </div>
                                 </div>

                                 <div>
                               
                                 </div>

                           
                                        
                                         
                             </div>


             


            </div>
    </div>
  )
}

export default Collection