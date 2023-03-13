import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const NavbarWrapper = styled(motion.nav)`       
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    
    
`;

export const Container = styled(motion.div)`
    display: flex;
    width: 100%;
    top: 0;
    position: fixed;   
    font-family: 'Syne'; 
    padding: 40px 80px 0 80px;

    ${media.bigDesktop` padding: 40px 20px 40px 20px `} 
`;

export const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--text);   
    
    

    @media (min-width: 1300px) {
        display: none;        
    }
`;

export const Box = styled(motion.div)`
    display: flex;
    width:100%;
    justify-content:space-between;
    position: fixed
`;

export const Logo = styled.div`
    font-size: 1.8rem;
    cursor:pointer;
    padding-bottom:10px; 
    width:50%; 
    font-weight:600; 

    a {
        text-decoration: inherit;
    } 
    
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem; 
    font-weight:600;
    width:50%;    
    padding-right:160px;

    a {
        padding-left: 25px;
        text-decoration: inherit;
        color: var(--text);

    } 

    ${media.bigDesktop` padding-right:40px;`}   
    ${media.desktop` display: none;`} 
`;

export const Underline = styled(motion.div)`
    padding-bottom: 3px;
    border-bottom: 1px solid var(--text);
`;

//Navbar Toggle Button

export const Button = styled(motion.button)`
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    height: 50px;
    display: none;
    font-size: 1.5rem; 
    font-weight:600;
    padding-right:45px;

    ${media.desktop` display: block; `}  
`;

export const White = styled.div`       
    color: var(--text); 

    ${media.bigDesktop` color: var(--white)`}
`;

export const Black = styled.div`      
    color: var(--text);
`;

//Extend Container

export const Menu = styled(motion.ul)`
    position: fixed;
    top:30vh;
    font-family: 'Syne';
    z-index:999;

    @media (min-width: 1300px) {
        display: none;        
    }
`;

export const List = styled(motion.li)`
    margin-top: 35px;
`;

export const Item = styled(motion.div)`
    height: 80px;
    flex: 1;
    color: var(--white);
    position: absolute;
    font-size: 3.5rem; 
    font-weight:600;

    a {
        text-decoration: inherit;
        color: var(--white);
        margin-top: 50px;  
    }

    ${media.thone` font-size: 10vw`}
    ${media.phablet` font-size: 12vw`}
`;

export const Location = styled(motion.div)`
    font-size: 1.5rem; 
    color: var(--white);
    position: absolute;
    margin-top: 150px;
    width: 200px;
`;