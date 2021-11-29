import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import './Contact.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };
    return (
        <div style={{backgroundColor: '#070640', paddingTop: '50px', paddingBottom: '50px'}}>
            <Typography variant="h2" gutterBottom component="div" style={{textAlign: 'center', color: 'white', padding: '30px'}}>
                Let’s Talk
            </Typography>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm= {8} md={8} style={{backgroundColor: '#0B0952', height: '500px'}}>
                    
                        <Container className="add-product">
                            <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center', color: 'white', padding: '10px'}}>
                                Get In Touch
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                                <input {...register("email")} placeholder="Email"/>
                                <input {...register("description")} placeholder="Subject"/>
                                <input {...register("description")} placeholder="Message"/>
                                <Button type="submit" variant="contained" color="success" style={{height: '50px', width: '60%'}}>
                                    Success
                                </Button>
                            </form>
                        </Container>
                    
                    </Grid>
                    <Grid item xs={4} sm= {8} md={4}>
                    
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    South Kamalapur Dhaka, 1212
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <AddLocationAltIcon style={{fontSize: '75px'}}/> Office Address
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    sozibhossain69@gmail.com
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <MailOutlineIcon style={{fontSize: '75px'}}/> Official Mail
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    +880-1789903862
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <HeadphonesIcon style={{fontSize: '75px'}}/> Official Phone
                                </Typography>
                            </Item>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default Contact;