import React from 'react'
import Ozim from '../img/ozim.jpg'
const Home = () => {
  return (
    <div className='w-full max-w-7xl justify-between'>
        <div className='flex justify-between '>
            <div className='items-center text-6xl font-bold space-y-5 text-slate-300   py-24'>
                <h1>Salom 👋,</h1>
                <h1>Mening ismim</h1>
                <h1>Yo'ldashev Shohjahon</h1>
                <h1>Men web-sayt yarataman</h1>
            </div>
            <div className='py-24 '>
                <img className='w-72 h-72 border-4   border-sky-300 hover:border-sky-500 transition-all   rounded-[50%] drop-shadow-2xl' src={Ozim} alt="Rasm" />
            </div>
        </div>
    </div>
  )
}

export default Home