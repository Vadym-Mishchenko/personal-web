import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0 40px;
  transition: color 0.3s ease;
`;

export const HeroContent = styled(motion.create(Box))`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const AnimatedTitle = styled(motion.create(Typography))`
  text-align: center;
`;

export const HeroImage = styled.img`
  max-width: 256px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(105%);
  }
`;

export const HeroInfoBlock = styled(Box)`
  text-align: center;
  align-self: center;
`;
