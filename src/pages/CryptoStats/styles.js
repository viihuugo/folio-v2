import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const Wrapper = styled(motion.section)`  
    background-color: var(--green);
    padding: 0 80px;
    overflow: hidden;

    ${media.bigDesktop` padding: 0 20px `}    
`;

export const Navbar = styled(motion.div)`
    display:flex;
    justify-content: space-between;
    color: var(--white);
    font-size: 1.3rem;
    font-weight:500;    
`;

export const Menu = styled(motion.div)`
    margin-top:40px;

    span {
        display: inline-block;
        margin-right:200px; 
        cursor:pointer; 
    }

    a{
        text-decoration:none;
        color:inherit;
    }

    .projectName {
        cursor: default;
    }

    .icon {
        padding-left: 10px;
    }

    @media (max-width: 1195px) {
        display:grid;

        span {
            margin-right:100px; 
            padding-bottom:5px;
        }
    }

`;

export const Projects = styled(motion.span)`
    margin-top:40px;
    cursor:pointer;
    display: inline-block;
    

    a {
        text-decoration: inherit;
        color: var(--white);
    }
`;

export const Title = styled(motion.div)`
   color: var(--dark-green);
   font-size:1.8rem;
   margin-top:80px;
   font-weight:500;

   ${media.thone` font-size: 1.5rem`}
`;

export const Description = styled(motion.div)`
   color: var(--white);
   font-size:1.8rem;
   margin-top:40px;
   font-weight:500;
   display:flex;

   ul {
    width:50%;
    padding-left:25px;
    margin-bottom:50px;
   }

   li {
    padding-bottom:10px;
   }

   ${media.thone` font-size: 1.5rem`}
`;

export const Image = styled(motion.img)`   
   width:100%;
   margin:50px 0 50px 0;

   ${media.thone` margin: 20px 0 20px 0;`}
   
`;