import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const ContactWrapper = styled(motion.section)`    
    padding: 0 80px;
    height:100vh;
    font-family: 'Syne';
    background-color: var(--text);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    ${media.bigDesktop` padding: 0 20px `}    
`;

export const Container = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;

    a {
        text-decoration: inherit;
        color: var(--white);
    }

    ${media.bigDesktop` padding: 40px 20px 0 20px;`}
`;

export const Menu = styled(motion.div)`    
    font-size: 1.5rem; 
    font-weight:600;   

    .city {
        padding-right:130px;
    }

    ${media.desktop` 
        .city {
            display:none;
        }   
    `} 
    
`;


export const Email = styled(motion.div)`
    text-decoration: underline;
    font-weight:600;      
    text-align:center;
    font-size:4rem;  

    ${media.tablet` font-size: 8vw; `}
 
`;

export const Socials = styled(motion.div)`
    font-size:2rem;
    font-weight:600;   
    cursor:pointer;                 
    margin:30px 0; 
    text-align:center;
 
    span {

        padding:0 30px 0 0;
        display: inline-block;
        
        a{
            text-decoration:none;
            color:inherit;
        }
 
        &:hover {
           text-decoration: underline;
        }    
       
    }  

    
    ${media.thone` font-size: 5vw; `}
`;