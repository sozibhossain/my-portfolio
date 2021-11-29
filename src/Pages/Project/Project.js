import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';

const Project = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('./Projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);

    return (
        <div style={{backgroundColor: '#070640', paddingTop: '50px', paddingBottom: '50px'}}>
            <Typography variant="h2" gutterBottom component="div" style={{textAlign: 'center', color: 'white', padding: '20px'}}>
                Project
            </Typography>
            <Container>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        projects.map(project => <Projects
                            project = {project}
                        ></Projects>)
                    }
                </Grid>
            </Container>
            
        </div>
    );
};

export default Project;