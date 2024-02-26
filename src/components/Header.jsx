import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full max-w-[1580px] mx-auto py-5   font-bold text-2xl '>
        <div className=' flex justify-between items-center px-10'>
            
            <div>
            <NavLink className=' text-white' to="/"><h1>Yo'ldashev</h1></NavLink>
            </div>
            <nav  className=''>
            <div className='w-full  '>
          <div className="lg:block hidden">
            <ul className=' text-slate-300 text-xl rounded-md  px-8 font-semibold flex justify-between items-center gap-x-10'>
              
            <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/">Uy</NavLink>
              </li>
              <li>
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Abaut">Haqida</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Tehnalogy">Tehnalogialar</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Work">Loyihalar</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a href=""></a>
          </div>
        </div> 
            </nav>
        </div>
    </div>
  )
}

export default Header