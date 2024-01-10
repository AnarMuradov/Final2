import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    </>
  )
}

export default MainLayout