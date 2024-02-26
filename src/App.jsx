import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Abaut from './pages/Abaut'
import MainLayout from './Layouts/MainLayout'
import Work from './pages/Work'
import Tehnalogy from './pages/Tehnalogy'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/Abaut' element={<Abaut/>}/>
        <Route path='/Tehnalogy' element={<Tehnalogy/>}/>
        <Route path='/Work' element={<Work/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  
  )
}

export default App