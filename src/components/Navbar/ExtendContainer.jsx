import React from 'react'
import { motion } from "framer-motion";

import { Item, Menu, List, Location } from "./styles";

import { Link } from "react-router-dom";



const stagger = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const variants = {
    open: {
      y: 0,
      visibility: 'visible',
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        delay: .7
      }
    },
    closed: {
      y: 50,
      visibility: 'hidden',
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

   

export const Navigation = () => (
  
  <Menu variants={stagger}>
 
    <List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Item><Link to="/">HOME</Link></Item>
    </List>
    <List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Item><Link to="/about">ABOUT</Link></Item>
    </List>
    <List
    variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Item><Link to="/work">WORK</Link></Item>
    </List>
    <List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Item><Link to="/contact">CONTACT</Link></Item>
    </List>

    <Location variants={variants}>Based in Sao Paulo Brazil</Location>

  
  </Menu>
)