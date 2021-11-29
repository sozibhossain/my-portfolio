import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner2 from '../../../images/banner/banner2.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const bannerbg = {
    background : `url(${banner2})`
    

}

const Banner = () => {
    return (
        <div style={bannerbg}>
            <Container  sx={{marginTop: '15px'}}>
                <Grid container spacing={2} sx={{paddingTop: '100px', paddingBottom: '100px'}}>
                    <Grid item xs={8}>
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white'}}>
                            I'M SOZIB HOSSAIN
                        </Typography>
                        <Typography variant="h4" gutterBottom component="div" sx={{color: 'white'}}>
                            Web Developer
                        </Typography>
                        <LinkedInIcon sx={{color: 'white', fontSize: '50px'}}/><GitHubIcon sx={{color: 'white', fontSize: '50px'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;