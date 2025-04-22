import React from 'react';
import { Box, Typography, Link, useMediaQuery, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#25263c',
        color: '#fff',
        py: 2,
        px: 3,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      <Typography variant="body2">
        Copyrights © {new Date().getFullYear()}
      </Typography>

      <Typography variant="body2" sx={{ mt: isMobile ? 1 : 0 }}>
        Need a Portfolio Website Like This | Contact{' '}
        <Link
          href="https://www.linkedin.com/in/manikantavaddi428"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#f5b10c', fontWeight: 500, textDecoration: 'none' }}
        >
          Manikanta
        </Link>
      </Typography>

      <IconButton
        onClick={scrollToTop}
        sx={{
          backgroundColor: '#62b4f9',
          color: '#000',
          ml: isMobile ? 0 : 2,
          mt: isMobile ? 1 : 0,
          '&:hover': { backgroundColor: '#4ca4e9' },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
