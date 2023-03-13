import styled from "styled-components";
import { motion } from 'framer-motion'

export const PrivacyScreen = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--text);
    z-index: 2;
`;