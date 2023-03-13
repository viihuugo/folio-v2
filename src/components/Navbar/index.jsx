import React, { useState, useEffect } from 'react'
import { NavbarWrapper, Container, Background, Box, InnerContainer, Button, Logo, Black, White, Underline } from './styles'

import { motion, useCycle } from "framer-motion";

import { Link, useLocation } from "react-router-dom";

import { Navigation } from "./ExtendContainer";

import { RemoveScroll } from 'react-remove-scroll';

export default function Navbar() {

    const [isOpen, toggleOpen] = useCycle(false, true);

    const sidebar = {
        open: {
          clipPath: "circle(2200px at 1500px 0px)",
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        },
        closed: {
          clipPath: "circle(0px at 1500px 0px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

      let location = useLocation();

      const [ isAbout, setAbout] = useState(false);
      const [ isWork, setWork] = useState(false);

      useEffect(() => {
        if (location.pathname === '/about')
          setAbout(true);
        if (location.pathname === '/work')
          setWork(true);
      }, [location]);

  return (
    <NavbarWrapper initial={{ y:-50, opacity: 0}} animate={{y: 0, opacity: 1, transition: { delay:2, duration: 1 }}}>
        <Container
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >

            <Background variants={sidebar}/>  

            <Box>
                {isOpen ? <Logo><Link to="/"><White>VICTOR ALVES</White></Link></Logo> : <Logo><Link to="/"><Black>VICTOR ALVES</Black></Link></Logo> }

                <InnerContainer>
                    { isAbout ? <Link to="/about"><Underline>About</Underline></Link> : <Link to="/about">About</Link>}
                    { isWork ? <Link to="/work"><Underline>Work</Underline></Link> : <Link to="/work">Work</Link>}                    
                    <Link to="/contact">Contact</Link>
                </InnerContainer>

                <Button onClick={() => toggleOpen()}>
                    {isOpen ? <RemoveScroll><White>Close</White></RemoveScroll>  : <Black>Menu</Black>}
                </Button>

            </Box>

        <Navigation/> 

        </Container>
    </NavbarWrapper>
  )
}
