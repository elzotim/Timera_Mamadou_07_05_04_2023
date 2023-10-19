import React from 'react'
import Logo from '../Composentes/Header/logo'
import Navigation from '../Composentes/Header/Navigation'
import Footer from '../Composentes/Footer'
import LogementInfons from '../Composentes/PourLogement/logementinfos'
function LogementInfos() {
  return (
    <div>
      <Logo />
      <Navigation />
      <LogementInfons/>
      <Footer/>
    </div>
  )
}

export default LogementInfos
