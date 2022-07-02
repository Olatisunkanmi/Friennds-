import React from 'react'
import '../../src/App.css'
import img4 from '../Assests/new4.jpg';
import img2 from '../Assests/new3.jpg';
import img3 from '../Assests/new2.jpg';
import img1 from '../Assests/new1.jpg';
import img0 from '../Assests/pre.jpg';


const Collage = () => {
  return (
    <div 
        className='mt-5 flex flex-wrap flex-row p-10'>

            <div
                className='w-1/4'>
                 <img src={img4} alt="" 
                    className='h-full object-cover'/>
            </div>


            <div className='w-1/2' >

                        <div
                            className='flex w-full'>
                        <img src={img3} alt="" className='w-1/2 object-cover'/>
                        <img src={img2} alt="" className='w-1/2 object-cover'/>
                        </div>

                        <div 
                            className='flex w-full'>
                        <img src={img1} alt="" className='w-1/2 object-cover'/>
                        <img src={img1} alt="" className='w-1/2 object-cover'/>
                        </div>


            </div>

            <div
                className='w-1/4'>
            <img src={img0} alt="" 
            className='h-full object-cover'/>
            </div>

    </div>
  )
}

export default Collage