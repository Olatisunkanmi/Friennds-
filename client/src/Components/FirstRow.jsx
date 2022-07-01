import React from 'react'
import img2 from '../Assests/F2.jpg';
import img3 from '../Assests/F3.jpg';
import img1 from '../Assests/F1.jpg';
import img4 from '../Assests/F4.jpg';


const FirstRow = () => {
  return (
    <div 
        className='flex items-center text-left  flex-col
             m-10 
             md:flex-row '>

                                    <div
                                    className='flex flex-wrap flex-col  w-full p-5 m-5 md:w-3/4 items-center lg:block xl:block'> 
                                                <img src={img4} alt="" 
                                                className='object-cover first--img '/>

                                                <div className='mt-5'>
                                                        <h3 className='font-bold text-lg'>Emerald Cream</h3>

                                                        <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                        </p>
                                                </div>

                                </div>

                                <div
                                className='flex flex-col  w-full p-5 m-5 md:w-3/4 items-center lg:hidden xl:block'> 
                                            <img src={img2} alt="" 
                                            className='object-cover first--img '/>

                                            <div className='mt-5'>
                                                    <h3 className='font-bold text-lg'>Orange Skin Glow</h3>

                                                    <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                    </p>
                                            </div>

                            </div>

                            <div
                            className='flex flex-col  w-full p-5 m-5 md:w-3/4 items-center 
                            md:hidden lg:block xl:block '> 
                                        <img src={img1} alt="" 
                                        className='object-cover first--img '/>

                                        <div className='mt-5'>
                                                <h3 className='font-bold text-lg'>Emerald Cream</h3>

                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                </p>
                                        </div>

                        </div>


                                <div
                                    className='flex flex-col  p-5 m-5 w-full md:w-3/4 items-center
                                    md:hidden lg:block xl:block'> 
                                                <img src={img3} alt="" 
                                                className='object-cover first--img '/>

                                                <div className='mt-5'>
                                                        <h3 className='font-bold text-lg'>Emerald Cream</h3>

                                                        <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                        </p>
                                                </div>

                                </div>
               
    </div>
  )
}

export default FirstRow