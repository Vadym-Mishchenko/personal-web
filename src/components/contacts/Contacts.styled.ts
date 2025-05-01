import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface ContactsContainerProps {
  isDarkMode: boolean;
}

const MotionBox = motion.create(Box);

export const ContactsContainer = styled(MotionBox, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})<ContactsContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 32px 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#111')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#111' : '#fff')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

export const IconsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
