import React, { useState } from "react";
import { HomeWrapper, Hero, Job, CodeBar, Name, About, Page, Intro, Flex, SubText, Bio, Button } from './styles'

import { Navbar, Footer, Projects, Contact, Transition } from '../../components';

import { SectionBox, Creative } from '../../components/Projects/styles';

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom';

import { Loader } from '../index'



export default function Home() {

  const stagger = {
    animate:{    
      transition:{
        staggerChildren:.2,
        delayChildren:.2,
      },
    },
  };

  const FadeIn = {
    initial:{
      opacity:0,
    },

    animate:{
      opacity:1,
      transition:{duration:.3,}
    },
  }; 

  const [loading, setLoading] = useState(true);



  return (
    <>

      { loading?<Loader setLoading={setLoading}></Loader>: 
        <>
        <Navbar/>
    
          <HomeWrapper>
            <Hero>
                <Job>
                  <motion.div variants={stagger} initial='initial' animate='animate'>
                    <motion.span variants={FadeIn}>C</motion.span>
                    <motion.span variants={FadeIn}>R</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                    <motion.span variants={FadeIn}>A</motion.span>
                    <motion.span variants={FadeIn}>T</motion.span>
                    <motion.span variants={FadeIn}>I</motion.span>
                    <motion.span variants={FadeIn}>V</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                  </motion.div>
        
                  <motion.div variants={stagger} initial='initial' animate='animate'>
                    <motion.span variants={FadeIn}>D</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                    <motion.span variants={FadeIn}>V</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                    <motion.span variants={FadeIn}>L</motion.span>
                    <motion.span variants={FadeIn}>O</motion.span>
                    <motion.span variants={FadeIn}>P</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                    <motion.span variants={FadeIn}>R</motion.span>
                  </motion.div>
                </Job>
        
                <CodeBar initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:1}}}>
                  FOLIO `23
                </CodeBar>
        
                <Name>
                  <motion.div variants={stagger} initial='initial' animate='animate'>
                    <motion.span variants={FadeIn}>V</motion.span>
                    <motion.span variants={FadeIn}>I</motion.span>
                    <motion.span variants={FadeIn}>C</motion.span>
                    <motion.span variants={FadeIn}>T</motion.span>
                    <motion.span variants={FadeIn}>O</motion.span>
                    <motion.span variants={FadeIn}>R</motion.span>
                  </motion.div>
        
                  <motion.div variants={stagger} initial='initial' animate='animate'>
                    <motion.span variants={FadeIn}>A</motion.span>
                    <motion.span variants={FadeIn}>L</motion.span>
                    <motion.span variants={FadeIn}>V</motion.span>
                    <motion.span variants={FadeIn}>E</motion.span>
                    <motion.span variants={FadeIn}>S</motion.span>
                  </motion.div>
                </Name>
            </Hero>
        
            <About>
            
              <Page initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:.6,duration:1}}} viewport={{once:true}}>(001)</Page>
        
              <Intro initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{delay:.2,duration:1}} viewport={{once:true}}>
                I CREATE DIGITAL PRODUCTS USING
                CODING AND INTERACTIVE DESIGN TO
                REALIZE IDEIAS
              </Intro>
        
              <Flex>
                <SubText initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.6,duration:1}} viewport={{once:true}}>
                  The combination of code & design
                </SubText>
        
                <Bio initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.7,duration:1}} viewport={{once:true}}>
                  Software developer student passioned about
                  web technologies and design,
                  full stack developer trying
                  to explore new creative ways
                  to bring user interfaces and creating
                  interaction digital experiences.
        
        
                  <Button><Link to="/about">More about me</Link></Button>
                </Bio>
              </Flex>
            </About>
        
            <SectionBox initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2,duration:1}} viewport={{once:true}}>
                  <Page>(002)</Page>
                  <Creative>Creative Content</Creative>
            </SectionBox> 
        
            <Projects/>
        
            <Contact/>           
        
            <Footer/>
        
          </HomeWrapper>
        
          <Transition/>
        
        </>
      
      }
      
    </>
  )
}
