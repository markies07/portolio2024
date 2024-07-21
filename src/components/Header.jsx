import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header() {
    
    return (
        <header className='absolute top-0 right-0 shadow-lg flex justify-center bg-[#454545] w-full py-5 xl:w-auto xl:px-20 xl:py-5 xl:rounded-bl-3xl'>
            <ul className='flex gap-7 sm:gap-10 sm:text-lg'>
                <li className='cursor-pointer hover:text-red-400 duration-300'><Link to="/">About</Link></li>
                <li className='cursor-pointer hover:text-red-400 duration-300'><Link to="/skills">Skills</Link></li>
                <li className='cursor-pointer hover:text-red-400 duration-300'><Link to="/projects">Projects</Link></li>
                <li className='cursor-pointer hover:text-red-400 duration-300'><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header