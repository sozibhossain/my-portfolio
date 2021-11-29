import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import react from '../../images/skills/react.png';
import javascript from '../../images/skills/javascript.png';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Skills = () => {
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                    <Item>
                        <img src={react} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                            React js
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={javascript} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                    <Typography variant="h4" gutterBottom component="div">
                            React js
                    </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                        <img src={react} alt="" style={{width: '120px', borderRadius: '50%'}}/>
                        <Typography variant="h4" gutterBottom component="div">
                            React js
                        </Typography>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={react} alt=""/>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={react} alt=""/>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={react} alt=""/>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={react} alt=""/>
                    </Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>
                    <img src={react} alt=""/>
                    </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Skills;