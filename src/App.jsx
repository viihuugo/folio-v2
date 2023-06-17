import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

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
      
        <Router>
          <Switch>
            {/* Define your routes using the Route component */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            
          </Switch>
        </Router>
    </AnimatePresence>         
    </>
  )
}

export default App
