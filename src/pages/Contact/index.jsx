import React from 'react'
import { ContactWrapper, Container, Menu, Email, Socials } from './styles'

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Transition } from '../../components';

import { Footer } from '../../components';

export default function Contact() {

    
  const stagger = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 1.4,
        staggerChildren: 0.3,
      },
    },
  };

  const FadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  

  return (
    <ContactWrapper>
        
        <Container initial={{ y: -50, opacity: 0}} animate={{ opacity:1, y: 0, transition:{delay:.9,duration:1}}}>
            <Menu><Link to="/">VICTOR ALVES</Link></Menu>
            <Menu><span className='city'>Based in Sao Paulo</span></Menu>
            <Menu><Link to="/">Close</Link></Menu>              
        </Container>

        
        <motion.div>
        <Email initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.8,duration:1}} viewport={{once:true}}><p>HELLO@VICTOR</p><p>HUGOALVES.COM</p></Email>
        <Socials variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}}>
            <motion.span variants={FadeIn}><a href='https://www.linkedin.com/in/victorhugoalves/'>LINKEDIN</a></motion.span>
            <motion.span variants={FadeIn}><a href='https://github.com/viihuugo'>GITHUB</a></motion.span>                  
        </Socials>  
        </motion.div>
        

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.8,duration:1}} viewport={{once:true}}>
          <Footer/> 
        </motion.div>

        <Transition/>

    </ContactWrapper>
  )
}
