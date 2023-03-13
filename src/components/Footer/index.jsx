import React from 'react'
import { Container } from './styles'


export default function Footer() {
  return (
        <Container 
        initial={{opacity:0}} 
        whileInView={{opacity:1,transition:{delay:.1, duration:1}}} 
        viewport={{once:true}}>
        <p>CREATED FOR, DESIGNED BY, AND DEVELOPED BY</p><p> VICTOR ALVES IN 2023.</p>
        </Container>
    
  )
}
