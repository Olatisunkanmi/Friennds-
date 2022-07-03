import { ArrowRightAltSharp, CardGiftcard, Facebook, GitHub, Home, Instagram, Mail, PhoneInTalk, Twitter } from '@material-ui/icons'
import logo from '../Assests/pep.jpg';
import React from 'react'
import footerImg from '../Assests/footer.png'

const Footer = () => {
  return (
    <div
        className='mt-10'>

            <div 
                className='flex flex-col md:flex-row'>

                        <div 
                            className='w-full bg-black text-white relative justify-center'>
                                        <div    
                                            className=' z-40 w-3/4'>

                                          
                                            <div 
                                                className='flex flex-row items-center w-3/12 m-5'>
                                                  <img src={logo} alt="" className='w-1/2'/>

                                            <span
                                            className='lush text-5xl tracking-widest' >  Lush </span>
                                            </div>

                                                    <div 
                                                        className='p-3'>
                                                    <p 
                                                    className='mb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>


                                                <h3 className='text-lg font-bold'>Payment Method</h3>
                                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                                                <CardGiftcard />
                                                    </div>
                                        </div>

                               
                        </div>

                        <div
                            className='text-white bg-black w-full'>
                              
                                            <ul
                                                className='flex flex-row md:space-x-10 p-5'>

                                                            <li 
                                                                className='space-y-5 items-center m-2'>
                                                                <h3 
                                                                    className='text-xl font-mono'>Connect with us</h3>    
                                                                <p   className='font-thin text-sm'> <Twitter /> Follow Us on Twitter  </p>
                                                                <p     className='font-thin text-sm'> <Facebook /> Follow Us on Facebook</p>
                                                                <p  className='font-thin text-sm'> <GitHub /> Follow us on GitHub </p>
                                                                <p    className='font-thin text-sm'> <Instagram /> Follow Us on Instagram  </p> 
                                                            </li>

                                                            <li  className='space-y-5 items-center m-2'>
                                                                    <h3 className='text-xl font-mono'>Help </h3>
                                                                    <p   className='font-thin text-sm'> <ArrowRightAltSharp/> Search   </p>
                                                                    <p   className='font-thin text-sm'> <ArrowRightAltSharp/>Orders and Returns </p>
                                                                    <p   className='font-thin text-sm'><ArrowRightAltSharp/> Consultant </p>
                                                                    <p   className='font-thin text-sm'><ArrowRightAltSharp/> Help & FAQs </p>
                                                                    <p   className='font-thin text-sm'><ArrowRightAltSharp/> Locations </p> 
                                                            </li>

                                                            <li  className='space-y-5 items-center m-2'>
                                                                        <h3 className='text-xl font-mono'>Information </h3>
                                                                        <p   className='font-thin text-sm'> Contact Us </p>
                                                                        <p   className='font-thin text-sm'> About us </p>
                                                                        <p   className='font-thin text-sm'> Careers </p>
                                                                        <p   className='font-thin text-sm'> Refund and Returns </p>
                                                                        <p   className='font-thin text-sm'> Deliveries   </p>
                                                            </li>

                                            </ul>
                                

                                
                                        <ul
                                        className='flex flex-row md:space-x-10 p-5'>
                                                    <li  className='space-y-3 items-center m-2'>
                                                            <h3 className='text-xl font-mono'>Support </h3>
                                                            <p  className='text-sm'> Search Terms</p>
                                                            <p  className='text-sm'> Advanced Search </p>
                                                            <p  className='text-sm'> Shipping Information </p>
                                                            <p  className='text-sm'> Store Locater </p>
                                                            <p  className='text-sm'> Return Policy </p>
                                                    </li>

                                                    <li  className='space-y-5 items-center m-2'> 
                                                                            <h3 className='text-xl font-mono' > Contact Us  </h3>
                                                            
                                                                    
                                                                        <p
                                                                            className='space-x-2'>
                                                                        <Home />
                                                                        <span>   Address : No 40 Baria Sreet 133/2 NewYork City, NY, United States.</span> </p>
                                                            
                                                                                <div
                                                                                    className='flex items-center space-x-2'>
                                                                                    <PhoneInTalk />
                                                                                    <div>
                                                                                    <p>  009998000090 </p>
                                                                                    <p>  009998000090 </p>
                                                                                    </div>
                                                                                </div>

                                                                        <p className='space-x-2'>
                                                                        <Mail />    <span> Email : lush@customer.com</span></p>
                                                                

                                                    </li>

                                        </ul>

                          


                        
                        </div>
            </div>
    </div>
  )
}

export default Footer