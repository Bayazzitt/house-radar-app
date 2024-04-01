import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from './img/houselogo.png';
import './css/Header.css';

function Header() {
    return (
        <div className='header'>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={Logo} alt="Logo" style={{ maxHeight: '70px' }} />
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
