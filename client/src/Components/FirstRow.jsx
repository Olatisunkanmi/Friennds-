import React from 'react'
import imgTwo from '../Assests/F2.jpg';
import img3 from '../Assests/F3.jpg';
import img1 from '../Assests/F1.jpg';
import img4 from '../Assests/F4.jpg';


const FirstRow = () => {
  return (
    <div 
        className='flex items-center text-center space-y-5 flex-col
             m-10 space-x-10
             md:flex-row '>

                                    <div
                                    className='flex flex-col bg-brightRed sm:w-full md:w-3/4 items-center lg:block xl:block'> 
                                                <img src={img4} alt="" 
                                                className='w-3/4 object-cover md:first--img 
                                                              lg:first-img
                                                                xl:first--img  '/>

                                                <div>
                                                        <h3>Emerald Cream</h3>

                                                        <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                        </p>
                                                </div>

                                </div>

                                    <div
                                    className='sm:w-full md:w-3/4 lg:block xl:block'> 
                                                <img src={img4} alt="" 
                                                className=' first--img'/>

                                                <div>
                                                <h3>Emerald Cream</h3>

                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                </p>
                                        </div>

                                
                                </div>

                                <div
                                    className='sm:w-full md:w-3/4 lg:block xl:block md:hidden'> 
                                                <img src={img1} alt="" 
                                                className='first--img'/>

                                                <div>
                                                <h3>Emerald Cream</h3>

                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                </p>
                                        </div>
                               
                                </div>

                                <div
                                    className='sm:w-full md:w-3/4 lg:hidden xl:block md:hidden'> 
                                                <img src={img3} alt="" 
                                                className='first--img'/>

                                                <div>
                                                <h3>Emerald Cream</h3>

                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet rem nulla officiis soluta deserunt nobis nesciunt quos ex. Tenetur sed eum atque doloremque sunt excepturi sint maxime, fuga unde.
                                                </p>
                                        </div>
                               
                                </div>
               
    </div>
  )
}

export default FirstRow