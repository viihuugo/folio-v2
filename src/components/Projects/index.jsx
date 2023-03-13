import React from 'react'
import { ProjectsWrapper, SplitWrapper, Project, Title, Description, Image } from './styles';

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom';

export default function Projects() {

  const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
 
  
  const letter = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, ...transition },
    },
  };


  return (

    <ProjectsWrapper>
             

            <SplitWrapper>


                <div>
                  <Project>
                    <Link to="/work/cryptostats">
                      <Title whileHover={{scale:1.01}} transition={{duration:.3}}>
                      <motion.div variants={firstName} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                        <motion.span variants={letter} viewport={{once:true}}>C</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>R</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>Y</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>P</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>T</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>O</motion.span>
                      </motion.div>
                      <motion.div variants={firstName} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                        <motion.span variants={letter} viewport={{once:true}}>S</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>T</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>A</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>T</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>S</motion.span>
                      </motion.div>
                      </Title>
                    </Link>



                    <Description initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.5,duration:1}} viewport={{once:true}}>
                      AN ANALYSIS TOOL FOR CRYPTO USERS
                    </Description> 
                  </Project>
                </div>

                <Link to="/work/cryptostats"><Image src="/analyst.jpg" whileHover={{scale:1.01}} transition={{duration:.3}}></Image></Link>
            </SplitWrapper>

            <SplitWrapper >

                <div>
                <Project>

                  <Link to="/work/autisocial">
                    <Title whileHover={{scale:1.01}} transition={{duration:.3}}>
                    
                      <motion.div variants={firstName} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                        <motion.span variants={letter} viewport={{once:true}}>A</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>U</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>T</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>I</motion.span>                    
                      </motion.div>
                      <motion.div variants={firstName} initial='initial' whileInView={'animate'} viewport={{once:true}}>
                        <motion.span variants={letter} viewport={{once:true}}>S</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>O</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>C</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>I</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>A</motion.span>
                        <motion.span variants={letter} viewport={{once:true}}>L</motion.span>
                      </motion.div>
                    </Title> 
                  </Link>             


                    <Description initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.5,duration:1}} viewport={{once:true}}>
                      A WEBSITE IN SUPPORT OF RAISING AUTISM AWARENESS
                    </Description> 
                </Project>
                </div>

                <Link to="/work/autisocial"><Image src="/autisocial.png" whileHover={{scale:1.01}} transition={{duration:.3}}></Image></Link>   
                
            </SplitWrapper>

        </ProjectsWrapper>
  )
}
