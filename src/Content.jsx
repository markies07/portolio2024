import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function Content() {
  return (
    <div className='bg-[#313131] select-none order-1 lg:order-2 relative overflow-hidden h-full min-h-[48rem] w-[97%] lg:w-full rounded-3xl flex flex-col py-10 px-8'>
        {/* HEADER */}
        <Router>
          <div>
              <Header />    
          </div>
          {/* CONTENT */}
          <div>
            
              <Routes>
                <Route path='/' element={<About />}/>
                <Route path='/skills' element={<Skills />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact />}/>
              </Routes>
          </div>
        </Router>
        
    </div>
  )
}

export default Content