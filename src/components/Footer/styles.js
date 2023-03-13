import styled from "styled-components";
import { motion } from 'framer-motion'
import { media } from '../../Styles/media'



export const Container = styled(motion.div)`
    margin-bottom: 20px;
    font-family: 'Syne';
    font-size:20px;    
    font-weight:600;
    text-align:center;
    height:50px;

    
    ${media.thone`font-size:16px; padding:5% 8%;`}
    
`;