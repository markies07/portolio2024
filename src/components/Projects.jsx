import React from 'react'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'

function Portfolio() {
  return (
    <div className='flex flex-col pt-12 xl:pt-0'>
        {/* TITLE */}
        <div className='mb-14'>
            <h1 className='relative text-3xl sm:text-4xl font-medium'>Projects
                <div className='absolute -bottom-5 left-0 w-14 h-2 bg-red-500 rounded-full'></div>
            </h1>
        </div>
        
        {/* PROJECTS */}
        <div className='mt-7 flex gap-10 md:gap-8 justify-center md:justify-start flex-wrap'>
            <div className=''>
                <div className='w-72 h-52 overflow-hidden rounded-xl'>
                    <img className='w-full opacity-95 cursor-pointer hover:brightness-75 hover:scale-110 duration-200 h-full object-cover' src={project1} alt="" />
                </div>
                <div className='ml-2 mt-2'>
                    <p className='text-xl font-medium'>HomeHub</p>
                    <p className='text-sm opacity-90 font-light'>Web App</p>
                </div>
            </div>
            <div className=''>
                <div className='w-72 h-52 overflow-hidden rounded-xl'>
                    <img className='w-full opacity-95 cursor-pointer hover:brightness-75 hover:scale-110 duration-200 h-full object-cover' src={project2} alt="" />
                </div>
                <div className='ml-2 mt-2'>
                    <p className='text-xl font-medium'>CodePad</p>
                    <p className='text-sm opacity-90 font-light'>Web Design</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Portfolio