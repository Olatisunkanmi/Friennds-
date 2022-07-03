import { AccountBalance, AssignmentReturnedSharp, ContactSupportSharp, LocalShipping } from '@material-ui/icons'
import React from 'react'

const Service = () => {
  return (
    <div>
                <div 
                    className='m-5 mx-20'> 
                            <ul 
                                className='flex flex-col justify-center mt-5 bg-stone-300 
                               md:flex-row md:space-x-20 md:p-2'>
                                            <li 
                                                className='m-5 cursor-pointer'>
                                                    <div 
                                                        className='space-y-2 text-center'>   
                                                                <LocalShipping  
                                                                    className=''/>
                                                            <p 
                                                                className='font-bold text-xl'> Free Delivery</p>
                                                            <p  
                                                                className='font-bold'> Delivery within 5 days </p>
                                                    </div>
                                            </li>


                                            <li
                                                className='m-5 cursor-pointer'>
                                                    <div
                                                        className='space-y-2 text-center'>
                                                                <ContactSupportSharp />
                                                            <p
                                                                className='font-bold text-xl'> 24/7 Customer Support</p>
                                                            <p
                                                                 className='font-bold'>Call Toll Free @ 111 000 000</p>
                                                    </div>
                                            </li>

                                            <li
                                                className='m-5 cursor-pointer'>
                                                    <div
                                                        className='space-y-2 text-center'>
                                                            <AssignmentReturnedSharp />
                                                            <p
                                                                className='font-bold text-xl'> Return of Goods</p>
                                                            <p
                                                                 className='font-bold'>No charge on Emi</p>
                                                    </div>
                                            </li>

                                            <li
                                                className='m-5 cursor-pointer'>
                                                    <div
                                                        className='space-y-2 text-center'>   
                                                            <AccountBalance />
                                                            <p
                                                                className='font-bold text-xl'> Great Savings </p>
                                                            <p
                                                                 className='font-bold'> For Special Products and Returing Customers </p>
                                                    </div>
                                            </li>
                            </ul>
                </div>
    </div>
  )
}

export default Service