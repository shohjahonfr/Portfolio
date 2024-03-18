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
      <div className='w-full max-w-3xl items-center'>
        <h1 className='font-bold text-4xl'>Tehnalogialar</h1>
      </div>
    <div className='w-full max-w-6xl mx-auto'> 
    <div className=''>
      <div class="flex gap-20 mx-auto">
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Html} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Css} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Boots} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Tailwind} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Js} alt="" />
        </div>
      </div>
      <div className='flex gap-20 mx-auto my-20 w-full max-w-3xl'>
      <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={react} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={redux} alt="" />
        </div>
        <div className='w-40 h-40 p-10  rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <img src={Hub} alt="" />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Tehnalogy