import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className='flex flex-col  min-h-screen'>
    <Header />
    <main className=' w-full max-w-[1480px] mx-auto px-5 grow font-bold text-2xl'>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default MainLayout