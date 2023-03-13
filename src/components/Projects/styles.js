import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'


export const ProjectsWrapper = styled(motion.div)`
   margin:100px 0;
   line-height: .8;

   ${media.tablet` margin: 0;`}
`;

export const SectionBox = styled(motion.div)`
   display:flex;
`;

export const Page = styled(motion.div)`
  font-size:1.5rem;
  font-weight:600;

  ${media.bigDesktop`margin-bottom:50px;`}
   
`;

export const Creative = styled(motion.div)`
  font-size:1.5rem;
  font-weight:500;
  width:100%;
  text-align:center;

  ${media.bigDesktop`margin:0;`}

`;

export const SplitWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 4rem;
    margin-top: 100px;

   ${media.tablet`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, auto);
      grid-gap: 1rem;
      margin-top: 0;`
   };
`;

export const Project = styled.div`
   font-size: 6rem;
   font-weight: 500;
   position: sticky;
   top: 70px;

   ${media.tablet`
      font-size: 4rem;
   `};
`;

export const Title = styled(motion.div)`
   font-size:4rem;
   font-weight:700;
   font-family:'Syne';
   cursor:pointer; 
   color: var(--text);

   span {
      display: inline-block;
   }

   ${media.desktop`font-size:3.5rem;`}
   ${media.phablet`font-size:12vw;`}
`;

export const Description = styled(motion.div)`
   font-size:2rem;
   font-family:'Syne';
   margin-top:150px;
   margin-left:100px;
   width:50%;

   ${media.desktop`
      width:100%;
      margin-top:50px;
      margin-left:0;
      font-size:1.5rem;
   `}

`;

export const Image = styled(motion.img)`
   width:100%;
   height:700px;
   cursor:pointer;

   ${media.tablet`
      width:100%;
      height:400px;
      margin-top:50px;
      margin-bottom:100px
   `}

`;
