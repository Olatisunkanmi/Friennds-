import React from 'react'

const Topbar = () => {
  return (
    <div 
        className='text-center justify-center sticky top-0 bg-white'>
            <ul 
                className='space-x-7 flex flex-row text-center justify-center font-bold p-3 m-1 '>
                  <li
                     className='cursor-pointer hover:text-rose-700 active:text-rose-700 '> Home</li>
                  <li className='cursor-pointer hover:text-rose-700 active:text-rose-700 '> Collection </li>
                  <li className='cursor-pointer hover:text-rose-700 active:text-rose-700 '> Shop</li>
                  <li className='cursor-pointer hover:text-rose-700 active:text-rose-700 '> Pages </li>
                  <li className='cursor-pointer hover:text-rose-700 active:text-rose-700 '>  Blog </li>
              </ul>
    </div>
  )
}

export default Topbar