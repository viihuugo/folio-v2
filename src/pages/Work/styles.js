import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const WorkWrapper = styled.section`    
    margin: 0 80px;

    ${media.bigDesktop` margin: 0 20px `}    
`;

export const Container = styled(motion.div)`
    height: 100vh;
    margin-left: 15vw;

    ${media.bigDesktop` margin: 0`}   
`;

export const Title = styled(motion.div)`
    padding-top: 40vh;
    font-size:6rem;
    font-family:'Syne';
    font-weight: 600;  
    line-height: .8;

    span {
        display: inline-block;
    }

    ${media.between` font-size: 13vw`}
`;

export const Info = styled(motion.div)`
    font-size:1.5rem;
    font-family: 'Roboto';
    margin-top: 50px;
`;