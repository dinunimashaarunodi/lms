import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradiant-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'> 
        Empower your futere with the courses designed to 
        <span className='text-blue-600'> fit your choice.</span>
         <img  src={assets.sketch} alt='sketch' className='md:blockhidden absolute -bottom-7 right-0'/>
      </h1>
      <p className='text-gray-500 md:block  max-w-2xl mx-auto'> 
        we bring together world-class instructor ineractive content,and a supportive community to help you achive your personal and professional goals.</p>
      <p className='text-gray-500 md:hidden  max-w-sm mx-auto'></p>
      <SearchBar/>
    </div>
  )
}

export default Hero