import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import sozib from '../../images/about/sozib.jpg';

const About = () => {
    return (
        <div style={{backgroundColor: "#070640"}}>
            <Container style={{backgroundColor: '#0B0952', paddingTop: '60px', paddingBottom: '50px'}}>
            <Typography variant="h3" gutterBottom component="div" style={{color: 'white', paddingBottom: '20px'}}>
                About Me
            </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={sozib} alt="" style={{width: '300px', height: '400px'}}/>
                    </Grid>
                    <Grid item xs={8}>
                    <Typography variant="h6" gutterBottom component="div" style={{color: 'white'}}>
                    Hello ! I want to work in a very competitive field where I can take responsibilities and show my supreme strength. I am a hard-working person eager to learn and explore new ideas and opportunities and dedicated to practical as well as research oriented work. We can Guarantee 100% of your work and Unlimited revision. Over the 2 years, I have developed various applications both in Windows and Web Specially in Web using significant number of technologies as below TECHNICAL SKILLS: HTML, CSS, Bootstrap, jQuery, JavaScript, WordPress, Woo commerce, MySQL, SEO, React JS, Node JS, Next, etc. Thanks.
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;