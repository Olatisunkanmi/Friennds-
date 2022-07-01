import React from 'react'
import flex1 from '../Assests/new1.jpg';
import flex2 from '../Assests/new2.jpg';
import flex3 from '../Assests/new3.jpg';

const Arrivals = () => {
  return (
    <div 
        className='mt'>
            <div 
            className='text-center'>       
                    <h2 className='text-3xl font-serif'>New Arrials </h2>
                    <p className='font-mono'> Just <span className='text-bold text-xl text-brightRed'> IN </span>
                    </p>
                        <hr />
            </div>



            <div 
                className='flex'>

                                    <div    
                                        className='w-full '>
                                            <img src={flex1} alt="" />
                                    </div>

                                        {/**Sub Pictures  */}
                                    <div className='flex flex-col  flex-wrap'>

                                                    <div 
                                                        className='flex-1 flex space-x-5 '>    

                                                                    <div 
                                                                        className='w-2/7'>
                                                                            <img src={flex2} alt=""  />
                                                                    </div>
                                                                    <div 
                                                                        className='w-2/7'>
                                                                            <img src={flex2} alt=""  />
                                                                    </div>
                                                                    <div 
                                                                        className='w-2/7'>
                                                                            <img src={flex2} alt=""  />
                                                                    </div>
                                                        
                                               </div>


                                               <div 
                                               className='flex-1 flex space-x-3 '>    

                                                           <div 
                                                               className='w-2/7'>
                                                                   <img src={flex2} alt="" />
                                                           </div>
                                                           <div 
                                                               className='w-2/7'>
                                                                   <img src={flex2} alt=""  />
                                                           </div>
                                                           <div 
                                                               className='w-2/7'>
                                                                   <img src={flex2} alt=""  />
                                                           </div>
                                               
                                      </div>


                                    </div>

                                    
            </div>



    </div>
  )
}

export default Arrivals