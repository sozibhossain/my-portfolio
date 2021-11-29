import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor: '#070640', paddingTop: '50px', paddingBottom: '50px'}}>
                <Container style={{backgroundColor: '#0B0952', paddingTop: '60px', paddingBottom: '50px'}}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm= {4} md={4}>
                            <Typography variant="h3" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                My Portfolio
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm= {4} md={4}>
                            <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                My Portfolio
                            </Typography> 
                        </Grid>
                        <Grid item xs={4} sm= {8} md={4}>
                        <LinkedInIcon sx={{color: 'white', fontSize: '50px', marginLeft: '10px'}}/><GitHubIcon sx={{color: 'white', fontSize: '50px', marginLeft: '20px'}}/><TwitterIcon sx={{color: 'white', fontSize: '50px', marginLeft: '20px'}}/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{backgroundColor: '#070640', padding: '5px'}}>
                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white', textAlign: 'center'}}>
                    © 2021 Follio. All rights reserved
                </Typography>
            </div>
        </div>
    );
};

export default Footer;