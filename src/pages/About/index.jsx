import React from 'react'
import { AboutWrapper, Container, Header, City, SplitContainer, SubText, Bio } from './styles'

import { useIsPresent } from 'framer-motion'

import { SectionBox, Page, Creative } from '../../components/Projects/styles';

import { Navbar, Projects, Contact, Footer, Transition } from '../../components';

export default function About() {

    const isPresent = useIsPresent();

  return (
    <>
    
    <Navbar/>
      <AboutWrapper>

        <Container>

            <Header initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.7,duration:1.5}} viewport={{once:true}}>CREATIVE</Header>
            <Header initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.9,duration:1.5}} viewport={{once:true}}>DEVELOPER</Header>
            <City src="/saopaulo.jpg"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1,  transition: {delay:2, duration: 1}}}
              style={{ originY: isPresent ? 1 : 0 }}
            />
            <Header initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.5,duration:1.2}} viewport={{once:true}}>BASED IN</Header>
            <Header initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.5,duration:1.2}} viewport={{once:true}}>SAO PAULO</Header>

        </Container>

        <SplitContainer>
            
            <SubText initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.6,duration:1}} viewport={{once:true}}>
             The beginning of a new journey
            </SubText>
            
            <Bio initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.7,duration:1}} viewport={{once:true}}>
                Software developer student at FATEC, passioned about web technologies and design, 
                full stack developer trying to explore new creative ways to bring 
                user interfaces and creating interaction digital experiences.<br></br><br></br>

                My aim is to take coding into the professional dimension where I hope
                to bring value and continously grow myself.
            </Bio>

        </SplitContainer>

        <SectionBox initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2,duration:1}} viewport={{once:true}}>
              <Page>(002)</Page>
              <Creative>Creative Content</Creative>
        </SectionBox> 

        <Projects/>

        <Contact/>

        <Footer/>      

      </AboutWrapper>
    
      <Transition/>
    
    </>
  )
}
