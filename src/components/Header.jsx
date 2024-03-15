import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Telegarm from "../img/telegram.svg"
import Hub from "../img/github.svg"
import Day from "../img/day.png"
const Header = () => {
    return (
        <div className='w-full max-w-[1580px] mx-auto py-5   font-bold text-2xl '>
            <div className=' flex justify-between items-center px-5'>

                <div>
                    <NavLink className=' text-slate-300' to="/"><h1>Yo'ldashev</h1></NavLink>
                </div>
                <nav className='flex justify-between items-center'>
                    <div className='w-full '>
                        <div className="flex ">
                            <ul className='text-slate-300 text-xl space-x-10  px-8 font-semibold flex justify-between items-center '>

                                <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full">
                                    <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute   after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full" to="/">Uy</NavLink>
                                </li>
                                <li>
                                    <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full" to="/Abaut">Haqida</NavLink>
                                </li>
                                <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full">
                                    <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full" to="/Tehnalogy">Tehnalogialar</NavLink>
                                </li>
                                <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full">
                                    <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute  after:w-0 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full" to="/Work">Loyihalar</NavLink>
                                </li>
                            </ul>
                            <div className='space-x-5 flex'>
                                <a href="https://t.me/Yoldashev_FR" target="_blank" ><img src={Telegarm} className='w-8 h-10' alt="Telegram" /></a>
                                <a href="https://github.com/shohjahonfr"  target="_blank"><img src={Hub} className='w-8 h-10' alt="" /></a>
                                <button><img src={Day} className='w-8 h-8' alt="" /></button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header