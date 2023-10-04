import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    {/* Everything above and below the outlet will be same in every page */}
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout
