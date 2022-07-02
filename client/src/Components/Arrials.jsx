import React from 'react'
import flex1 from '../Assests/new1.jpg';
import flex2 from '../Assests/new2.jpg';
import flex3 from '../Assests/new3.jpg';
import { Star, StarHalf } from '@material-ui/icons';

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
                className='flex static'>

                                    <div    
                                    className='hidden w-full p-2 b static bg-veryPaleRed  flex-col md:flex'>
                                            <img src={flex1} alt="" 
                                                className='w-full'/>
                                              
                                                        <div className='absolute'>
                                                        <a 
                                                        href="#" 
                                                        class="p-3 px-6 pt-2 
                                                        text-white font-bold text-basee bg-brightRed rounded-lg baseline 
                                                            
                                                        hover:bg-brightRed hover:text-white">
                                                            PRE ORDER !
                                                        </a>
                                                        </div>

                                                        
                                    </div>

                                        {/**Sub Pictures  */}
                                    <div className=' flex-row flex md:flex-col  flex-wrap'>

                                                    <div 
                                                        className='flex-1 flex flex-col items-center md:flex-row space-x-5 p-8'>    

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>

                                                                <div 
                                                                    className='px-5 p-3 bg-brightRed text-white font-bold rounded-lg md:hidden'>
                                                                        <button>
                                                                            Explore 
                                                                        </button>
                                                                </div>
                                                                   
                                               </div>

                                               {/** Each Row */}
                                                    <div 
                                                        className='hidden flex-1 flex-col items-center md:flex md:flex-row space-x-5 p-8'>    

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>

                                                                    <div 
                                                                        className='mb-5 w-2/6 space-y-2'>
                                                                                <img src={flex2} alt="" className='w-full md:w-9/12'/>

                                                                                <p 
                                                                                    className='font-bold cursor-pointer text-xl text-red-500 
                                                                                        hover:text-purple-800' > Face Cleaning Liquid </p>

                                                                                <p className='text-purple-800 font-mono font-bold '> $500 </p>
                                                                            <div  
                                                                                className='flex flex-row'> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <Star /> 
                                                                            <StarHalf /> 
                                                                            
                                                                            </div>
                                                                    </div>


                                                                   
                                               </div>


                                          


                     </div>

                                    
            </div>



    </div>
  )
}

export default Arrivals