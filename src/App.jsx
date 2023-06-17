import React from 'react'
import { Routes , Route , useLocation } from 'react-router-dom'

import { Home, About, Work, CryptoStats, Contact, AutiSocial } from './pages'


import { GlobalStyle } from './Styles/GlobalStyle'
import { ScrollToTop } from './components'
import { AnimatePresence } from 'framer-motion'

function App() {
  
  const location = useLocation();

  return (
    <>   
    <AnimatePresence mode='wait'>
      <GlobalStyle/>
      <ScrollToTop/>
      
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/work/cryptostats" element={<CryptoStats/>}/>
          <Route path="/work/autisocial" element={<AutiSocial/>}/>
          <Route path="/contact" element={<Contact/>}/>         
        
        </Routes>
    </AnimatePresence>         
    </>
  )
}

export default App
