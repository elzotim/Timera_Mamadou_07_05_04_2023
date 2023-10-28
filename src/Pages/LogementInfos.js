import React from 'react'
import Header from '../Composentes/Header/Header'
import Footer from '../Composentes/Footer'
import LogementInfons from '../Composentes/PourLogement/logementinfos'
function LogementInfos() {
  return (
    <>
    <div className="infosloge">
      <Header />
      <LogementInfons/>
      </div>
      <Footer/>
    </>
  )
}

export default LogementInfos
