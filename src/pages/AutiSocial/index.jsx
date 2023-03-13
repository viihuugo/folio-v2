import React from 'react'
import { Wrapper, Navbar, Menu, Projects, Title, Description, Image } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Link } from "react-router-dom";

import { motion } from 'framer-motion'

import { Transition } from '../../components';

export default function AutiSocial() {


    const stagger = {
      initial: {
        y: 0,
      },
      animate: {
        y: 0,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.2,
          staggerDirection: -1,
        },
      },
    };
    
   
    
    const fadeIn = {
      initial: {
        y: -50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      },
    };

    

  return (
    <Wrapper>

        <Navbar>
            <Menu variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                <motion.span variants={fadeIn} viewport={{once:true}}><a href='https://github.com/viihuugo/autisocial'>View Repo <FontAwesomeIcon className='icon' icon={faGithub} /></a></motion.span>
                <motion.span variants={fadeIn} viewport={{once:true}}><a href='https://autisocialinfo.netlify.app/'>Visit live link</a></motion.span>
                <motion.span variants={fadeIn} viewport={{once:true}} className='projectName'>Auti Social</motion.span>
            </Menu>
            <Projects 
              initial={{ opacity: 0}}
              animate={{ opacity:1, transition:{delay:.5,duration:.7}}}><Link to="/work">Projects</Link></Projects>
        </Navbar>




        <Title
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.5,duration:.7}}}
        >PROJECT CONCEPT</Title>
        <Description
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.8,duration:.7}}}
        >
            Auti Social is a website aimed towards raising awareness for autism by visually educating users.
            <br></br><br></br>
            Auti Social is a project geared towards educating individuals about the importance, statistics, and stigmas around autism.
            <br></br><br></br>
            With the use of web animations, advanced design and motion graphics.            
        </Description>

        <Title
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.5,duration:.7}}}
        >TECH FEATURED</Title>
        <Description
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.8,duration:.7}}}
        >
          <ul>
            <li>React.js</li>
            <li>Framer Motion</li>
            <li>Styled Components</li>
            <li>Figma</li>
          </ul>
        </Description>

        <Image src='/autisocial.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/>

        <Image src='/heroAuti.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/>

        <Image src='/aboutAuti.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/>

        <Image src='/statsAuti.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/> 

        <Image src='/animationAuti.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/> 

    <Transition/>

    </Wrapper>
  )
}
