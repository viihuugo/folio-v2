import React from 'react'
import { LoaderWrapper } from './styles'
import { motion } from 'framer-motion'
import { Transition } from '../../components'

export default function Loader({setLoading}) {
  return (
    <LoaderWrapper  >
      <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{delay:.8,duration:1.2}} onAnimationComplete={() => setLoading(false)}>"Loading Screen"</motion.div>
    
      <Transition/>
    </LoaderWrapper>
  )
}
