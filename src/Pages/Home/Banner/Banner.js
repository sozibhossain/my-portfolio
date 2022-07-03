import { Container, Grid, Button, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner/bg-image-16.png';
import DownloadIcon from '@mui/icons-material/Download';
import downloadpdf from '../../../images/pdf/Sozib Hossain Resume.pdf';




const Banner = () => {
    return (
        <div style={{backgroundColor: "#070640"}}>
            <Container  sx={{marginTop: '15px'}}>
                <Grid container spacing={2} sx={{paddingTop: '100px', paddingBottom: '100px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm= {4} md={6} style={{paddingTop: '50px'}}>
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white', fontFamily: 'Inter, sans-serif'}}>
                            Hello,
                        </Typography>
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white', fontFamily: 'Inter, sans-serif'}}>
                            I AM SOZIB.
                        </Typography>
                        <Typography variant="h4" gutterBottom component="div" sx={{color: 'white', fontFamily: 'Inter, sans-serif'}}>
                            Web Developer
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" sx={{color: 'white', fontFamily: 'Inter, sans-serif'}}>
                        Must explain to how all this mistaken idea denouncing pleasure pain the system and expound the actua.
                        </Typography>
                        <br/>
                        <a href={downloadpdf} download="downloadpdf" style={{ textDecoration: 'none', color: 'white' }}><Button color="success" variant="contained">RESUME <DownloadIcon style={{fontSize: '20px'}}/></Button></a>
                    </Grid>
                    <Grid item xs={4} sm= {4} md={6}>
                        <img src={banner} alt="" style={{width: '350px'}}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;