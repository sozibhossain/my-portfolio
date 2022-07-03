import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = (props) => {
    const {name, picture, id} = props.project;
    const navigate = useNavigate();

    const handleDetails = (id) => {
        const uri = `/projectDetails/${id}`
        navigate(uri);
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
                <Card  sx={{ maxWidth: 500, height: '330px' }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={picture}
                        alt="green iguana"
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="success" variant="contained" onClick={() => handleDetails(id)} size="small">View Details</Button>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
    );
};

export default Projects;