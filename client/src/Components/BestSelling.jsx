import React from 'react'
import img3 from '../Assests/new2.jpg';

const BestSelling = () => {
  return (
    <div>
                <div 
                    className='text-center'>
                        <h3 
                            className='text-3xl text-brightRed font-bold font-serif'>Best Selling </h3>

                        <ul 
                            className='mt-5 flex flex-row justify-center'>
                                <li     
                                    className='p-3  font-thin md:font-bold cursor-pointer text-xl border-2 border-emerald-300
                                        hover:bg-slate-800 hover:text-white'> Lip Gloss</li>
                                <li     
                                    className='p-3 mx-5 font-thin md:font-bold cursor-pointer text-xl border-2 border-emerald-300
                                        hover:bg-slate-800 hover:text-white'> Make-up </li>
                                <li     
                                    className='p-3  font-thin md:font-bold cursor-pointer text-xl border-2 border-emerald-300
                                        hover:bg-slate-800 hover:text-white'> Cosmetics </li>

                                <li     
                                    className='p-3 ml-5  font-thin md:font-bold cursor-pointer text-xl border-2 border-emerald-300
                                        hover:bg-slate-800 hover:text-white'> Powder </li>
                                        
                        </ul>
                </div>


                <div>

                    <div 
                        className='p-5'>
                                <ul
                                className='mt-5  flex flex-row justify-center h-1/2 p-5
                                    mx-20 md:space-x-6'>
                                            <li 
                                                className='p-3 cursor-pointer md:w-2/12'>
                                                <img src={img3} alt="" 
                                                    className=''/>
                                            </li>
                                            <li 
                                                className='p-3 cursor-pointer md:w-2/12'>
                                                <img src={img3} alt="" 
                                                    className=''/>
                                            </li>
                                            <li 
                                                className='p-3 cursor-pointer md:w-2/12'>
                                                <img src={img3} alt="" 
                                                    className=''/>
                                            </li>
                                            <li 
                                                className='p-3 cursor-pointer md:w-2/12'>
                                                <img src={img3} alt="" 
                                                    className=''/>
                                            </li>
                                            <li 
                                                className='p-3 cursor-pointer md:w-2/12'>
                                                <img src={img3} alt="" 
                                                    className=''/>
                                            </li>
                                </ul>
                    </div>

                </div>
    </div>
  )
}

export default BestSelling