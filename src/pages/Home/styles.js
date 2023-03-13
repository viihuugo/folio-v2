import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const HomeWrapper = styled.section`    
    margin: 0 80px;

    ${media.bigDesktop` margin: 0 20px `}    
`;

export const Hero = styled.div`    
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
    min-height: 100vh; 
    position: relative; 
    top:150px;

    ${media.between` grid-template-columns: repeat(1, minmax(0, 1fr)); grid-template-rows: 180px 180px 150px`}
`;

export const Job = styled.div`    
   grid-column-end: span 2;
   font-size: 8rem;
   font-family: 'Syne';
   font-weight: 600;  
   line-height: .8;

   ${media.bigDesktop` font-size: 6rem;`}
   ${media.between` font-size: 12vw;`}
   
`;

export const CodeBar = styled(motion.div)`    
   grid-column-end: span 1;  
   text-align: left; 
   font-family:'Libre Barcode 39 Extended Text';
   font-size: 4rem;
   font-weight: 500;
   align-self: center;
   padding-bottom:30px;

   ${media.bigDesktop` padding-bottom:150px;`}
   ${media.tablet` grid-column-end: span 2; order: 3; text-align: right; padding-bottom: 0`}
   ${media.between` font-size: 8vw;`}
`;

export const Name = styled.div`    
   grid-column-end: span 1;  
   text-align: right;
   font-size: 8rem;
   font-family: 'Syne';
   font-weight: 600;  
   line-height: .8;

   ${media.bigDesktop` font-size: 6rem;`}
   ${media.tablet` grid-column-end: span 2`}
   ${media.between` font-size: 12vw;`}
`;

//About Section
export const About = styled(motion.div)`   
   margin: 100px 0;
`;

export const Intro = styled(motion.div)`
   font-size: 2.5rem;
   text-align: left;
   font-weight: 600;
   font-family: 'Syne';
   padding-left: 35%;
   margin-bottom: 150px;

   ${media.bigDesktop`width: 100%; padding-left: 0;`}
   ${media.desktop`
      width: 100%;
      padding-left: 0;
      font-size: 2.5rem;
      margin-bottom: 50px;`}
  
   ${media.tablet`font-size: 2rem;`}
`;

export const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 1.5rem;

   ${media.bigDesktop`display: block; margin:0 50px;`}
`;

export const Bio = styled(motion.div)`
   text-align: left;
   width: 30%;
   padding-right: 20%;

   ${media.bigDesktop`width: 100%;`}
`;

export const SubText = styled(motion.div)`
   display: flex;
   align-items: center;
   margin:0 0 100px 150px;
   width:15%;

   ${media.bigDesktop`
      width: 50%;
      margin:0 0 50px 0px;
      display:block;`
   }   
`;

export const Button = styled(motion.div)`
   border-bottom: 2px solid var(--text);
   margin: 50px 0;
   width: 163px;
   font-weight:500;
   cursor: pointer;

   a {
        text-decoration: inherit;
        color: #000;
    }
`;

export const Page = styled(motion.div)`
  font-size:1.5rem;
  font-weight:600;

  ${media.bigDesktop`margin-bottom:50px;`}
   
`;

export const SectionBox = styled(motion.div)`
   display:flex;
`;




















