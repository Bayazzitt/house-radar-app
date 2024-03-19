import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import './css/Footer.css';
import Logo from './img/houselogo.png'

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
            <img src={Logo} alt="Logo" style={{ maxHeight: '80px', marginRight: '10px' }} />
            </Typography>
            <Typography variant="body2" color="inherit">
              Açıklama metni buraya gelecek.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Bağlantılar
            </Typography>
            <Link href="#" color="inherit">
              Link 1
            </Link>
            <br />
            <Link href="#" color="inherit">
              Link 2
            </Link>
            <br />
            <Link href="#" color="inherit">
              Link 3
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              İletişim
            </Typography>
            <Typography variant="body2" color="inherit">
              Adres bilgisi buraya gelecek.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
