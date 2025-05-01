import { Typography, IconButton } from '@mui/material';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { useCustomTheme } from '../../lib';
import { ContactsContainer, IconsContainer } from './Contacts.styled';

export const Contacts = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useCustomTheme();

  const socialIcons = [
    {
      id: 1,
      href: 'https://www.instagram.com/mikayamityan',
      ariaLabel: 'Instagram',
      icon: <FaInstagram size={24} />,
    },
    {
      id: 2,
      href: 'https://www.tiktok.com/@mikayamityan',
      ariaLabel: 'Tiktok',
      icon: <FaTiktok size={24} />,
    },
  ];

  return (
    <ContactsContainer
      id="contacts"
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Typography variant="h5" sx={{ userSelect: 'none' }}>
        Follow Me
      </Typography>

      <IconsContainer>
        {socialIcons.map((item) => (
          <IconButton
            key={item.id}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label={item.ariaLabel}
            sx={{
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </IconsContainer>

      <Typography variant="body2" sx={{ userSelect: 'none' }}>
        {`© ${currentYear} Zlatova Veronika. All rights reserved.`}
      </Typography>
    </ContactsContainer>
  );
};
