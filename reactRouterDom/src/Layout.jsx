import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './compunents/Header/Header'
import Footer from './compunents/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout