import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const AboutWrapper = styled.section`    
    margin: 0 80px;

    ${media.bigDesktop` margin: 0 20px `}    
`;

export const Container = styled.div`    
    margin: 200px 0 100px 20vw;

    ${media.bigDesktop` margin: 190px 0 100px 0;`}   
`;

export const Header = styled(motion.div)`
    font-size:6rem;
    font-family:'Syne';
    font-weight: 600;  
    line-height: .8;

    ${media.tablet` font-size:10vw; `}
    ${media.thone` font-size:12vw; `}   
`;

export const City = styled(motion.img)`
    height:375px;
    width:745px;
    margin:20px 0;

    ${media.tablet`width:100%;`}    
`;

export const SplitContainer = styled.div`    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 4rem;
    font-size:1.5rem;
    margin-bottom: 100px;

    ${media.bigDesktop` 
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
        grid-gap: 2rem;
    `}
`;

export const SubText = styled.div`    
    margin-left:20vw;
    width:30%;

    ${media.bigDesktop` width:100%; margin-left: 20px; `}
`;

export const Bio = styled.div`        
    width:50%;

    ${media.bigDesktop` width:90%; margin-left: 20px;`}
`;