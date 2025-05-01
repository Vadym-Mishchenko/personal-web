import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NavbarContainer = styled(Box)<{ component: React.ElementType }>(({ theme }) => ({
  zIndex: 1000,
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px',
  width: '100%',
  height: '64px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.down('md')]: {
    height: '56px',
    fontSize: '14px',
    padding: '0 20px',
  },

  [theme.breakpoints.down('sm')]: {
    height: '48px',
    fontSize: '12px',
    padding: '0 20px',
  },
}));

export const NavbarContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavbarLinks = styled(Box)`
  display: flex;
  gap: 24px;
`;

export const NavbarLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 500;
  text-decoration: none;
  user-select: none;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:visited {
    color: inherit;
  }
`;

export const RightBlock = styled(Box)`
  display: flex;
  align-items: center;
`;
