import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const ContactWrapper = styled(motion.div)`
   margin:200px 0;
   font-family:'Syne';

   ${media.tablet` margin: 0 0 100px 0;`}
`;

export const Page = styled(motion.div)`
  font-size:1.5rem;
  font-weight:600;

  ${media.bigDesktop`margin-bottom:50px;`}
   
`;

export const SectionBox = styled(motion.div)`
   display:flex;
`;

export const Touch = styled(motion.div)`
  font-size:1.5rem;
  font-weight:500;
  font-family:'Roboto';
  width:100%;
  text-align:center;   
`;

export const ContactInfo = styled(motion.div)`
   margin-top:200px;
   text-align:center;

   ${media.desktop`
      margin-top:50px; 
      text-align:left;
   `}  
`;

export const Email = styled(motion.div)`
   font-size:4vw;
   text-decoration: underline;
   font-weight:600;  

    
   ${media.desktop` font-size:4.8vw; `}
`;

export const Socials = styled(motion.div)`
   font-size:2rem;
   font-weight:600;   
   cursor:pointer;                 
   margin:30px 0; 

   span{
       padding:0 30px 0 0;
       a{
           text-decoration:none;
           color:inherit;
       }

      &:hover {
         text-decoration: underline;
      }
      
   }

  ${media.tablet` font-size:4vw;`}
   
`;