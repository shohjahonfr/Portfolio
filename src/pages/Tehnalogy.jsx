import React from 'react'
import Hub from "../img/github.svg"
import Html from "../img/html.svg"
import Css from "../img/css.svg"
import Boots from "../img/bootstrap.svg"
import Tailwind from "../img/tailwindcss.svg"
import Js from "../img/js.svg"
import react from "../img/react.svg"
import redux from "../img/redux.svg"
const Tehnalogy = () => {
  return (
    <div className=''>
      <div className='w-full max-w-8xl text-center'>
        <h1 className='font-bold text-4xl my-4'>Tehnalogialar</h1>
        <span className='font-normal text-xl my-4 inline-block'>Men bilgan va foydalangan texnologiyalar</span>
      </div>
    <div className='w-full max-w-7xl  mx-auto'> 
    <div className=''>
      <div class="flex gap-20 mx-auto justify-center">
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Html} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Css} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Boots} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Tailwind} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Js} alt="" />
        </div>
      </div>
      <div className='flex gap-20 mx-auto my-20 w-full justify-center max-w-7xl'>
      <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={react} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={redux} alt="" />
        </div>
        <div className='w-40 h-40 p-8  rounded-full bg-gradient-to-r from-sky-500 to-pink-600'>
        <img src={Hub} alt="" />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Tehnalogy