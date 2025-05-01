import { Switch } from '@mui/material';
import { useCustomTheme } from '../../lib';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLinks,
  NavbarLink,
  RightBlock,
} from './Navbar.styled';

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useCustomTheme();

  return (
    <NavbarContainer id="navbar" component="nav">
      <NavbarContent>
        <NavbarLinks>
          <NavbarLink href="#hero">Hero</NavbarLink>
          <NavbarLink href="#gallery">Gallery</NavbarLink>
          {/* <NavbarLink href="#video">Video</NavbarLink> */}
          <NavbarLink href="#contacts">Contacts</NavbarLink>
        </NavbarLinks>

        <RightBlock>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
            aria-label="Toggle dark mode"
          />
        </RightBlock>
      </NavbarContent>
    </NavbarContainer>
  );
};
