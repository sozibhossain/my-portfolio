import { Container, Grid, Button, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner/bg-image-16.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import downloadpdf from '../../../images/pdf/Resume MD Sozib Hossain.pdf';




const Banner = () => {
    return (
        <div style={{backgroundColor: "#070640"}}>
            <Container  sx={{marginTop: '15px'}}>
                <Grid container spacing={2} sx={{paddingTop: '100px', paddingBottom: '100px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm= {4} md={6} style={{paddingTop: '50px'}}>
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white'}}>
                            I'M SOZIB HOSSAIN
                        </Typography>
                        <Typography variant="h4" gutterBottom component="div" sx={{color: 'white'}}>
                            Web Developer
                        </Typography>
                        <LinkedInIcon sx={{color: 'white', fontSize: '50px'}}/><GitHubIcon sx={{color: 'white', fontSize: '50px'}}/>
                        <br/>
                        <br/>
                        <a href={downloadpdf} download="downloadpdf" style={{ textDecoration: 'none', color: 'white' }}><Button color="success" variant="contained">RESUME <DownloadIcon style={{fontSize: '20px'}}/></Button></a>
                    </Grid>
                    <Grid item xs={4} sm= {4} md={6}>
                        <img src={banner} alt="" style={{width: '400px'}}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;