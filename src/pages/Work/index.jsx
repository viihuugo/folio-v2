import React from 'react'
import { WorkWrapper, Container, Title, Info } from './styles'

import { motion } from 'framer-motion'


import { Navbar, Projects, Footer, Transition } from '../../components';

export default function Work() {

  const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ...transition },
    },
  };

 

  return (
    <>
    
    <Navbar/>
    <WorkWrapper>

      <Container>
          <Title variants={firstName} initial='initial' whileInView={'animate'} viewport={{once:true}}>
            <motion.span variants={letter} viewport={{once:true}}>P</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>R</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>O</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>J</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>E</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>C</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>T</motion.span>
            <motion.span variants={letter} viewport={{once:true}}>S</motion.span>
          </Title>
        
        <Info initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{delay:2,duration:1}} viewport={{once:true}}>
          A set of projects I've build.<br></br>
          The combination of my passion for design, code & interaction. 
        </Info>

      </Container>

      <Projects/>
      <Footer/>
      
    </WorkWrapper>

    
    <Transition/>
    

    </>
  )
}
