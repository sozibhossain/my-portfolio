import { Card, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const ProjectDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() => {
        fetch('/Projects.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if(details.length>0){
            const matchedData = details.find(detail => detail.id==id)
            setSpecificDetail(matchedData);
        }
        
    },[details]);


    return (
        <div style={{backgroundColor: '#070640'}}>
            <Container style={{paddingTop: '10%', paddingBottom: '5%'}}>
                <Box sx={{ width: '100%', padding: '30px' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor: 'white', padding: '30px'}}>
                        <Grid item xs={4} sm= {4} md={6}>
                            <img src={specificDetail?.picture} alt="" style={{width: '500px' }}/>
                        </Grid>
                        <Grid item xs={4} sm= {4} md={6}>
                        <Typography component="div" variant="h5">
                                Project Name : {specificDetail?.name}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" component="div">
                                Technologies:
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {specificDetail?.Technologies}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                <ArrowRightIcon sx={{fontSize: '30px'}}/> {specificDetail?.details}
                            </Typography>
                            <br/>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Live Link : {specificDetail?.LiveLink}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Client Link : {specificDetail?.ClientLink}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Server Link : {specificDetail?.ServerLink}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ProjectDetails;