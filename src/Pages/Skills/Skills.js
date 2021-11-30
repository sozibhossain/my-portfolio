import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import react from '../../images/skills/react.jpg';
import javascript from '../../images/skills/javascript.jpg';
import bootstrap from '../../images/skills/bootstrap.jpg';
import html from '../../images/skills/html.jpg';
import css from '../../images/skills/css.jpg';
import firebase from '../../images/skills/firebase.jpg';
import mongodb from '../../images/skills/mongodb.jpg';
import node from '../../images/skills/node.jpg';
import teilwint from '../../images/skills/tailwint.jpg';
import wordpress from '../../images/skills/wordpress.jpg';
import elementor from '../../images/skills/elementor.jpg';
import heroku from '../../images/skills/heroku.jpg';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Skills = () => {
    return (
        <div  style={{backgroundColor: '#070640', paddingTop: '50px', paddingBottom: '50px'}}>
            <Container style={{backgroundColor: '#0B0952', paddingTop: '60px', paddingBottom: '50px'}}>
            <Typography variant="h3" gutterBottom component="div" style={{color: 'white', paddingBottom: '20px'}}>
                Programming Skills
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                        <img src={react} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                            React js
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={javascript} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            Javescript
                    </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                        <img src={node} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                            Node js
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={mongodb} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            MongoDB
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={firebase} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            Firebase
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={css} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            CSS
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={bootstrap} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            Bootstrap
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={html} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            HTML
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                    <Item>
                    <img src={teilwint} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            Tailwind
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                        <Item>
                        <img src={wordpress} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                                Tailwind
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                        <Item>
                        <img src={elementor} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                                Tailwind
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm= {2} md={2}>
                        <Item>
                        <img src={heroku} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                                Tailwind
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Skills;