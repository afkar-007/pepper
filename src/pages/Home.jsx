import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Hero from '../components/Hero'
import Category from '../components/Category'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import MobileBottomNav from '../components/MobileBottomNav'

function Home() {

  const navigate = useNavigate()


  return (
   
    <>
      <Navbar/>
  <div className="home">

    <div className="light1"></div>
    <div className="light2"></div>

    <span className="particle p1"></span>
    <span className="particle p2"></span>
    <span className="particle p3"></span>
    <span className="particle p4"></span>

  

    {/* =================hero banner================== */}
     <Hero/>
   {/* =================hero banner================== */}
   
     <Category/>
   



</div>
    
   
    
    <MobileBottomNav/>
    <Footer/>
    
    
    
    
    
    
    </>




  )
}

export default Home