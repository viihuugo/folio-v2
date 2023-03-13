import React from 'react'
import { ContactWrapper, SectionBox, Page, Touch, ContactInfo, Email, Socials } from './styles'

import { motion } from 'framer-motion'


export default function Contact() {

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




  return (
    <ContactWrapper>
        
        <SectionBox initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2,duration:1}} viewport={{once:true}}>
          <Page>(003)</Page>
          <Touch>Get in touch</Touch>
        </SectionBox>
        
        <ContactInfo>           
          <Email initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2,duration:1}} viewport={{once:true}}>
            HELLO@VICTORHUGOALVES.COM
          </Email>        
          <Socials variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}}>
            <motion.span variants={FadeIn}><a href='https://www.linkedin.com/in/victorhugoalves/'>LINKEDIN</a></motion.span>
            <motion.span variants={FadeIn}><a href='https://github.com/viihuugo'>GITHUB</a></motion.span>                  
          </Socials>
        </ContactInfo>

    </ContactWrapper>
  )
}
