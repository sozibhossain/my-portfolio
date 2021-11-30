import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import downloadpdf from '../../../images/pdf/Resume MD Sozib Hossain.pdf';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor: '#070640'}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SOZIB
                </Typography>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                    <Button color="inherit">Home</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                    <Button color="inherit">About US</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/contactf">
                    <Button color="inherit">contact</Button>
                </NavLink>
                <a href={downloadpdf} download="downloadpdf" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">RESUME <DownloadIcon style={{fontSize: '20px'}}/></Button></a>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;