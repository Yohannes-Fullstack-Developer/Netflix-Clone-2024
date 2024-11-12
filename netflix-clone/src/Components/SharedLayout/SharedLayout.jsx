import React from 'react'
import Header1 from '../Header/Header1'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const SharedLayout = () => {
  return (
    <div>
      <Header1 />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout