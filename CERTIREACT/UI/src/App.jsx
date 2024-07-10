import React from 'react'
import Navbar from './components/Navbar'
import Imagebar from './components/Imagebar'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Issuepage from '../pages/Issuepage'
import Certiresult from '../pages/Certiresult'
import Homecerti from '../pages/Homecerti'
import MainLayout from './Layout/MainLayout'


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route path="/Issue" element={<Issuepage />} />
          <Route path="/" element={<Homecerti />} />
          <Route path="/result" element={<Certiresult />} />




        </Route>



      </>
    ))
  return (

    <RouterProvider router={router} />

  )
}

export default App
