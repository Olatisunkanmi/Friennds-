import React from 'react'
import '../../src/App.css'
import logo from '../Assests/pep.jpg';
import { Money, Person, Search, ShoppingBasket } from '@material-ui/icons'

const Header = () => {
  return (
      <div>
      
                    <div 
                    className='hidden bg-black text-white justify-around md:flex md:flex-row  text-xs'  >
                              <div 
                              className='flex p-2 m-2 space-x-5'>
                                      <p  
                                      className=''> 0002 9090 9090</p>
                                      
                                      <p> Mail </p>
                              </div>
                    
                    
                              <div
                              className='flex p-2 m-2 space-x-5'>
                                      <p> Store  Location </p>
                                      <p > Track Your Order </p>
                                      <p>  Speak With an Agent </p>
                              </div>
                    </div>
      
      <div 
      className='flex flex-row m-3 justify-around border-b-2 border-b-amber-600 pb-2 items-center' >
                     
                    <div 
                      className='flex flex-row items-center text-right'>

                           
                                  <img src={logo} alt="" 
                                      className='w-40'/>
                              
                           
                              
                              <div>
                              <span
                              className='lush text-8xl tracking-widest' >  Lush </span>
                            <p 
                                className='text-md font-bold italic'> ...Spice up your life  !  </p>
                              </div>
                      
                      </div>
      
      
                       <div
                         className='flex flex-row space-x-4'>
                             
                              <div 
                                className='flex flex-row'>
                                        <ShoppingBasket />
                                        <p>0 Item </p>
                                        </div>
                                        <Search />
                                            <div 
                                              className='flex flex-row'>
                                            <Money />
                                            <p>USD </p>
                                            </div>
                                        <Person />
                      </div>

             </div>


 </div>
    
  )
}

export default Header