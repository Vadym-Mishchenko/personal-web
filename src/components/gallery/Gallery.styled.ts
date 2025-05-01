import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const GalleryContainer = styled(motion.create(Box))`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
