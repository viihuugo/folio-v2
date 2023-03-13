import React from 'react'
import { Wrapper, Navbar, Menu, Projects, Title, Description, Image } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Link } from "react-router-dom";

import { motion } from 'framer-motion'

import { Transition } from '../../components';

export default function CryptoStats() {

  

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
    <Wrapper
       
    >

        <Navbar>
            <Menu variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                <motion.span variants={fadeIn} viewport={{once:true}}><a href='https://github.com/viihuugo/CryptoStats-client'>View Repo <FontAwesomeIcon className='icon' icon={faGithub} /></a></motion.span>
                <motion.span variants={fadeIn} viewport={{once:true}}><a href='https://crypto-stats-viihuugo.netlify.app/'>Visit live link</a></motion.span>
                <motion.span variants={fadeIn} viewport={{once:true}} className='projectName'>CryptoStats</motion.span>
            </Menu>
            <Projects
              initial={{ opacity: 0}}
              animate={{ opacity:1, transition:{delay:.5,duration:.7}}}
            ><Link to="/work">Projects</Link></Projects>
        </Navbar>




        <Title
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.5,duration:.7}}}
        >PROJECT CONCEPT</Title>
        <Description
          initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:1.8,duration:.7}}}
        >
            A React front-end application consuming an public API. CryptoStats provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation.
            <br></br><br></br>
            The application interface allows users to search for an specific coin and leave your comments about it.
            <br></br><br></br>
            Desktop only.
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
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
          <ul>
            <li>Coingecko API</li>
            <li>Styled Components</li>
            <li>AXIOS</li>
            <li>JSON Web Token</li>
          </ul>
        </Description>

        <Image src='/cryptoproject.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/>

        <Image src='/cryptoproject2.png' initial={{ opacity: 0}}
          animate={{ opacity:1, transition:{delay:2.5,duration:.7}}}/>

    <Transition/>

    </Wrapper>
  )
}
