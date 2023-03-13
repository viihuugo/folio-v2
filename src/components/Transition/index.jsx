import React from 'react'
import { PrivacyScreen } from './styles'
import { motion, useIsPresent } from "framer-motion";

export default function Transition() {

    const isPresent = useIsPresent();

  return (
   
    <PrivacyScreen
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
    />
    
  )
}