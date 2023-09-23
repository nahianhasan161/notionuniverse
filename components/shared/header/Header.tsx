import React from 'react'

// componets
import Topbar from './Topbar'
import MainHeader from './MainHeader'
import MobileHeader from './MobileHeader'

// css
import "@/app/globals.css"

const Header = () => {
  return (
    
  <header  id="site-header" className="site-header mobile-header-blue header-style-1">
    <Topbar/>
    <MainHeader />
    <MobileHeader />
  </header>
  )
}

export default Header