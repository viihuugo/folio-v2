import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'

export const LoaderWrapper = styled(motion.section)`    
    height: 100vh;
    background-color: var(--text);
    color: var(--white);
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;

        
`;