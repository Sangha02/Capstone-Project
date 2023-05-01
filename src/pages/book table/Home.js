import React from 'react'
import { Navbar } from '../../components'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const nav=useNavigate()
  return (
    <>
      
      <Navbar nav={nav} />
    <Header />
    <AboutUs />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
    </>
  )
}

export default Home
